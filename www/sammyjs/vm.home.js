define('vm.home',
    ['knockout', 'model'],
    function (ko, model) {
      return vm = (function() {
        //var product = new model.Product().id(1).name('Footer').price(100).stock(20);
        var viewName =ko.observable('home');
        var model = {
          title : ko.observable('Home Page')
        };
       
        var activate = function activate() {
          
        };

        return {
          activate: activate,
          viewName: viewName,
          model: model
        }
      })();
    });
