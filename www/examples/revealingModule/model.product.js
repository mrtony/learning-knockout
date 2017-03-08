'use strict';

define('model.product',
  ['ko'],
  function (ko) {
    var _product = function () {
      this.id = ko.observable(),
        this.name = ko.observable(),
        this.price = ko.observable(),
        this.stock = ko.observable();
    };

    //var Product = new _product().id(0).name('a');

    return _product;
  });
