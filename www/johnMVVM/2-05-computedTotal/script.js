'use strict';
(function () {
  /* 為何使用ko.computed?
        this.photoUrl = ko.computed(function () {
          return photoPath + this.photo();
      }, this);

  因為photoUrl為2個因子所構成: this.photo和photoPath. 而this.photo為observable, 也就是說它是個變因,
  會在建立時傳入，所以photoUrl就需要在this.photo改變時要跟著動態變更，這種情況下就要用computed.
  */
  var photoPath = "/images/";

  var loadProducts = function loadProducts() {
    $.each(my.sampleData.data.Products, function (i, p) {
        my.vm.products.push(new my.Product()
              .id(p.Id)
              .salePrice(p.SalePrice)
              .photo(p.Photo)
              .shortDescription(p.Model.Name)
        );
    });
  };

  // function helper 
  my.formatCurrency = function (value) {
      return "$" + value.toFixed(2);
  };

  // for creating Product Models
  my.Product = function () {
      this.id = ko.observable();
      this.salePrice = ko.observable();
      this.photo = ko.observable();
      this.shortDescription = ko.observable();
      // photo url
      //第2個參數this是要將my.Product這個htis傳入, 在computed中使用this時會指向my.Product
      this.photoUrl = ko.computed(function () {
          return photoPath + this.photo();
      }, this);

  };

  my.LineItem = function() {
      var self = this;
      self.product = ko.observable();
      self.quantity = ko.observable(1); // default
      self.extendedPrice = ko.computed(function () {
          return self.product() ? self.product().salePrice() * parseInt("0" + self.quantity(), 10) : 0;
      });
  }

  // NOTE: I am showing 2 ways to handle "this" with a computed observable.
  // 1st way is to pass in what "this should" represent.
  // 2nd way is to skip it, and use a variable that is scoped 
  // outside of the computed function.

  // The ViewModel
  my.vm = {
      metadata: {
          pageTitle: "Knockout: Computed",
          personal: {
              link: "http://twitter.com/john_papa",
              text: "@john_papa"
          }
      },
      products: ko.observableArray([]),
      lines: ko.observableArray([new my.LineItem()]),
      addLine: function () {
          my.vm.lines.push(new my.LineItem());
      },
      removeLine: function (line) {
          my.vm.lines.remove(line);
      }
  };
  // Computed observable function. 
  // We append it to the ViewModel here.
  my.vm.grandTotal = ko.computed(function () {
      var total = 0;
      $.each(this.lines(), function () {
          // "this" is part of the inner function
          total += this.extendedPrice();
      });
      return total;
  }, my.vm);

  //my.vm.loadProducts();
  loadProducts();
  ko.applyBindings(my.vm);
})();
