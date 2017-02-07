'use strict';
(function () {
  //iCheck binding
  ko.bindingHandlers.icheck = {
      init: function (element, valueAccessor, allBindingsAccessor) {
          var checkedBinding = allBindingsAccessor().checked;
          var status = valueAccessor();
          $(element).iCheck({
              checkboxClass: 'icheckbox_minimal-blue',
              increaseArea: '10%'
          });
          $(element).iCheck(status?'check':'uncheck');
          $(element).on('ifChanged', function (event) {
              checkedBinding(event.target.checked);
          });
      },
      update: function (element,valueAccessor, allBindings) {
          var checkedBinding = valueAccessor();
          $(element).iCheck(checkedBinding?'check':'uncheck');
      }
  };
})();
