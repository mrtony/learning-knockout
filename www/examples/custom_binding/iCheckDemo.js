'use strict';
(function () {
  var vm = (function() {
    var displayDetail = ko.observable(true);
    return {
      displayDetail: displayDetail
    };
  })();

  ko.applyBindings(vm); // This makes Knockout get to work
})();
