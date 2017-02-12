'use strict';
(function () {
  var vm = {
    title: 'test Ajax + Q'
  }

  var serviceGaming = function serviceGaming() {
    return Q.promise(function (resolve, reject) {
        jQuery.ajax({
            url: "https://www.reddit.com/r/gaming/.json",
            type: "GET"
        }).then(function (data, textStatus, jqXHR) {
            delete jqXHR.then; // treat xhr as a non-promise
            resolve(jqXHR);
        }, function (jqXHR, textStatus, errorThrown) {
            delete jqXHR.then; // treat xhr as a non-promise
            reject(jqXHR);
        });
    });
  };

  vm.loadJson = function loadJson() {
    serviceGaming()
    .then(function(jqXHR) {
      console.log(jqXHR);
    })
    ['finally'](function() {
      console.log('xxxxx');
    });

  };

  //Note: Data bind the values between the source and the targets using Knockout
  ko.applyBindings(vm);
})();
