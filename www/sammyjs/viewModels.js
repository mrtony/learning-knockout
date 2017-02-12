define('viewModels',
    ['knockout', 'vm.home', 'vm.about'],
    function (ko, vmHome, vmAbout) {
      return vm = (function() {
        return {
          home: vmHome,
          about: vmAbout
        }
      })();
    });
