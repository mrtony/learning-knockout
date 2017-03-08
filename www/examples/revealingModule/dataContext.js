'use strict';

define('dataContext',
  ['jquery'],
  function ($) {
    var getProduct = function (callback) {
      if ($.isFunction(callback)) {
        $.getJSON('product.json', function(data) {
          callback(data.Product);
        });
      }
    };

    return {
      getProduct: getProduct
    };
  });
