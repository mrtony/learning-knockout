(function () {
    var root = this;

    define3rdPartyModules();
    loadPluginsAndBoot();

    function define3rdPartyModules() {
        // These are already loaded via bundles. 
        // We define them and put them in the root object.
        define('jquery', [], function () { return root.jQuery; });
        define('ko', [], function () { return root.ko; });
    }
    
    function loadPluginsAndBoot() {
        requirejs.config({
            paths: {
                text: '../../bower_components/text/text'
            }
        });
        // Plugins must be loaded after jQuery and Knockout, 
        // since they depend on them.
        requirejs([
          'text'
        ], boot);
    }

    function boot() {
        require(['app'], function (app) { app.activate(); });
    }
})();