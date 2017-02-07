'use strict';
(function () {
  my.data = {
      metadata: {
          pageTitle: "Knockout: Observables",
          personal: {
              link: "http://twitter.com/john_papa",
              text: "@john_papa"
          }
      },
      product1: {
          id: 1002,
          itemNumber: "T110",
          model: "Taylor 110",
          salePrice: 699.75
      },
      product2: {
          id: ko.observable(1001),
          itemNumber: ko.observable("T314CE"),
          model: ko.observable("Taylor 314ce"),
          salePrice: ko.observable(1199.95)
      }
  };

  //Note: Data bind the values between the source and the targets using Knockout
  ko.applyBindings(my.data);
})();
