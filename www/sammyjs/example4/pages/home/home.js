// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['knockout', 'text!./home.html'], function(ko, htmlString) {
      var Home = function(params) {
        var title = ko.observable('Home Page');
       
        var activate = function activate() {
          
        };

        return {
          title, title,
          activate: activate
        }
      };
      
      //note: 用revealing module pattern時, 要使用instance
      //http://knockoutjs.com/documentation/component-registration.html#a-shared-object-instance
      return { viewModel: Home, template: htmlString };
      
    });