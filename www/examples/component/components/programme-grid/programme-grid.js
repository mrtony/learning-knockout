// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./programme-grid.html'], function(ko, htmlString) {
      //view model declation
      // function ProgrammeGrid(params) {
      //   this.message = ko.observable("Hello from the programme-grid component!");
      // }
  
      // // Return component definition
      // return { viewModel: ProgrammeGrid, template: htmlString };

      //view model declation
      var ProgrammeGrid = function(params) {
        var message = ko.observable("Hello from the programme-grid component!");
        var name = ko.observable('');

        if (params && params.showName)
          name('Tony');
        else
          name('Who am I');

        return {
          message: message,
          name: name
        };
      };
      
      //note: 用revealing module pattern時, 要使用instance
      //http://knockoutjs.com/documentation/component-registration.html#a-shared-object-instance
      return { viewModel: ProgrammeGrid, template: htmlString };
      
    });