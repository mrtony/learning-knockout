// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['knockout', 'text!./about.html', 'Q'], function(ko, htmlString, Q) {
      var About = function(params) {
        var title = ko.observable('About Page');
        var list = ko.observableArray([]);

        var loadData = function loadData() {
          return Q.promise(function (resolve, reject) {
              jQuery.ajax({
                  url: "https://www.reddit.com/r/gaming/.json",
                  type: "GET"
              }).then(function (data, textStatus, jqXHR) {
                  delete jqXHR.then; // treat xhr as a non-promise
                  resolve(data);
              }, function (jqXHR, textStatus, errorThrown) {
                  delete jqXHR.then; // treat xhr as a non-promise
                  reject(jqXHR);
              });
          });
        };
        var activate = function activate() {
          $('#busyindicator').activity(true);
          loadData()
          .then(function(respond) {
            list(respond.data.children);
          })
          ['finally'](function() {
            $('#busyindicator').activity(false);
          });
          // $.getJSON('https://www.reddit.com/r/gaming/.json', function(data) {
          //   list(data.data.children);
          //   $('#busyindicator').activity(false);
          // });
        };

        activate();

        return {
          title: title,
          activate: activate,
          list: list
        }
      };
      
      //note: 用revealing module pattern時, 要使用instance
      //http://knockoutjs.com/documentation/component-registration.html#a-shared-object-instance
      return { viewModel: About, template: htmlString };
      
    });