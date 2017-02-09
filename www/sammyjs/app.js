define('app',
    ['knockout', 'sammy', 'config', 'vm.home'],
    function (ko, sammy, config, vmHome) {
      var initialized = false;

      var vm = (function() {
        var viewName = ko.observable('');
        var pages = ko.observableArray(config.pages);

        return {
          pages: pages,
          viewName: viewName
        }
      })();

      var configureRoutes = function configureRoutes() {
        var app = sammy(function () {
                this.get('#:view', function () {
                    vm.viewName(this.params.view);
                });
            });
          if (!initialized) {
            initialized = true;
            app.setLocation('#home');
          }
          app.run();
      };

      var activate = function () {
        //Note: Data bind the values between the source and the targets using Knockout
        configureRoutes();
        ko.applyBindings(vm, document.getElementById('main-nav'));
      };

      return {
        activate: activate
      }
    });