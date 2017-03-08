'use strict';

define('app',
  ['jquery', 'ko', 'model', 'dataContext'],
  function ($, ko, model, db) {
    var vm = (function() {
      var products = ko.observableArray([]);
      var message = ko.observable('');

      return {
        products: products,
        message: message
      };
    })();

    var activate = function () {
      db.getProduct(function(data) {
        var a = [];
        ko.utils.arrayForEach(data || [], function(product) {
          a.push(product);
        });

        vm.products(a);
      });

      ko.applyBindings(vm);

    };

    return {
      activate: activate
    };
  });
