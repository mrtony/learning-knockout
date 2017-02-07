'use strict';
(function () {
  var product = {
    id: 1001,
    itemNumber: 'T314CE',
    model: 'Tylor 314ce',
    salePrice: ko.observable(1234.56),
    price: {
      cost: '100',
      profit: '1' 
    },
    manufacture: ko.observable({
      country: 'Taiwan',
      company: 'MTK' 
    }),
    memo: ko.observable({
      date: ko.observable('2017/01/01'),
      content: ko.observable('content') 
    })
  };
  ko.applyBindings(product); // This makes Knockout get to work
})();
