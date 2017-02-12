define('app',
    ['knockout', 'sammy', 'config', 'viewModels'],
    function (ko, sammy, config, viewModels) {
      var initialized = false;

      var vm = (function() {
        var pages = ko.observableArray(config.pages);
        var appView = ko.observable();

        return {
          pages: pages,
          appView: appView
        }
      })();

      var configureRoutes = function configureRoutes() {
        var app = sammy(function () {
                this.get('#:view', function () {
                    var targetView = viewModels[this.params.view];
                    vm.appView(targetView);
                    targetView.activate();  //初始化model的內容
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