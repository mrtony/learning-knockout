define('vm.about',
    ['jquery', 'knockout'],
    function ($, ko) {
      return vm = (function() {
        var viewName = ko.observable('about');
        var model = {
          title : ko.observable('About Page'),
          list : ko.observableArray([])
        };

        var activate = function activate() {
          model.list([]);
          $.getJSON('https://www.reddit.com/r/gaming/.json', function(data) {
            model.list(data.data.children);
          });
        };

        return {
          activate: activate,
          viewName: viewName,
          model: model
        }
      })();
    });