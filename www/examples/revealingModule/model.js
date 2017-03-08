'use strict';
define('model',
  ['model.product'],
  function (product) {
    var
      model = {
        Product: product
      };

    return model;
  });
