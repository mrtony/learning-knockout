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

  // for creating Product Models
  var Product = function () {
      this.id = ko.observable();
      this.salePrice = ko.observable();
      this.photo = ko.observable();
      this.itemNumber = ko.observable();
      this.description = ko.observable();
      this.photoUrl = ko.computed(function () {
          return photoPath + this.photo();
      }, this);
  };

  var loadProducts = function loadProducts() {
    $.each(my.sampleData.data.Products, function (i, p) {
        my.vm.products.push(new Product()
          .id(p.Id)
          .salePrice(p.SalePrice)
          .photo(p.Photo)
          .itemNumber(p.ItemNumber)
          .description(p.Description)
        );
    });
  };

  // function helper 
  my.formatCurrency = function (value) {
      return "$" + value.toFixed(2);
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
      itemToAdd: ko.observable(''), 
      products: ko.observableArray([]),
      selectedProducts: ko.observableArray([]),
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

  /////////////////////////////////////
  // Add an item code
  my.vm.addItem = function addItem() {
    if (my.vm.itemToAdd() !== '') {
      my.vm.products.push(new Product().description(my.vm.itemToAdd()));
    }
    my.vm.itemToAdd('');
  };
  /////////////////////////////////////


  /////////////////////////////////////
  // Removal code
  my.vm.productsAreSelected = ko.computed(function() {
    return my.vm.selectedProducts().length > 0;
  });

  my.vm.removeSelected = function removeSelected() {
    my.vm.products.removeAll(my.vm.selectedProducts());
    my.vm.selectedProducts([]);
  };

  /////////////////////////////////////

  /////////////////////////////////////
  // Sorting code
  my.vm.productsExist = ko.computed(function() {
    return my.vm.products().length > 0;
  });

  my.vm.sortProducts = function sortProducts() {
    my.vm.products.sort(
      function (left, right) {
          return left.description().toLowerCase() === right.description().toLowerCase()
              ? 0 : (left.description().toLowerCase() < right.description().toLowerCase() ? -1 : 1);
      }
    );
  };

  /////////////////////////////////////
  //my.vm.loadProducts();
  loadProducts();
  ko.applyBindings(my.vm);
})();
