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
      //鏈式初始化
      product: ko.observable(
          new my.Product()
              .shortDescription("Taylor Koa Series K66ce")
              .salePrice(4199)
              .photo("Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar.png")
          ),
      quantity: ko.observable(2)
  };

  //extended price
  my.vm.extendedPrice = ko.computed(function () {
      return this.product() ?
          this.product().salePrice() * parseInt("0" + this.quantity(), 10) : 0;
  }, my.vm);

  ko.applyBindings(my.vm);
})();
