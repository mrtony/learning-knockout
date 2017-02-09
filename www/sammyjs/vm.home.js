define('vm.home',
    ['knockout', 'model'],
    function (ko, model) {
      return vm = (function() {
        var product = new model.Product().id(1).name('Footer').price(100).stock(20);
        var viewName = ko.observable('about');

        return {
          product: product,
          viewName: viewName
        }
      })();
    });

// define('app',
//     ['knockout', 'config', 'model'],
//     function (ko, config, model) {
//       var vm = (function() {
//         var product = new model.Product().id(1).name('Footer').price(100).stock(20);
//         var pages = ko.observableArray(config.pages);
//         var viewName = ko.observable('about');

//         return {
//           product: product,
//           pages: pages,
//           viewName: viewName
//         }
//       })();


//       var activate = function () {
//         //Note: Data bind the values between the source and the targets using Knockout
//         ko.applyBindings(vm);
//       };

//       return {
//         activate: activate
//       }
//     });