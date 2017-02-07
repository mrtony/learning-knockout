'use strict';
(function () {

  // Here's my data model
  var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
    this.title = 'Helloworld';

    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
  };
 
  ko.applyBindings(new ViewModel("Planet2", "Earth")); // This makes Knockout get to work
})();
