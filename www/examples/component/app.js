define('app',
    ['ko', 'model'],
    function (ko, model) {
      var activate = function () {
        var vm = new model.Product().id(1).name('Car').price(100).stock(20);
        ko.components.register('programme-grid', { require: 'components/programme-grid/programme-grid' });
        //Note: Data bind the values between the source and the targets using Knockout
        ko.applyBindings(vm);
      };

      return {
        activate: activate
      }
    });