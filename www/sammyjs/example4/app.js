define('app',
    ['knockout', 'sammy', 'config'],
    function (ko, sammy, config) {
      var initialized = false;

      ko.components.register('home', { require: 'pages/home/home' });
      ko.components.register('about', { require: 'pages/about/about' });

      var vm = (function() {
        var pages = ko.observableArray(config.pages);
        var appView = ko.observable({
          viewName: ko.observable()
        });

        return {
          pages: pages,
          appView: appView
          //viewName: viewName
        }
      })();

      var configureRoutes = function configureRoutes() {
        var app = sammy(function () {
                this.get('#:view', function () {
                  debugger;
                    vm.appView().viewName(this.params.view);
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
        ko.applyBindings(vm, document.getElementById('view'));
      };

      return {
        activate: activate
      }
    });