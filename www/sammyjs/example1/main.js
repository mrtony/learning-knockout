(function () {
    var root = this;

    define3rdPartyModules();
    loadPluginsAndBoot();

    function define3rdPartyModules() {
        // These are already loaded via bundles. 
        // We define them and put them in the root object.
        define('jquery', [], function () { return root.jQuery; });
        define('knockout', [], function () { return root.ko; });
        define('sammy', [], function () { return root.Sammy; });
    }
    
    function loadPluginsAndBoot() {
        require.config({
            paths: {
                //lib
                'knockout-amd-helpers': '../../bower_components/knockout-amd-helpers/build/knockout-amd-helpers',
                text: '../../bower_components/text/text',
            }
        });
        // Plugins must be loaded after jQuery and Knockout, 
        // since they depend on them.
        requirejs([
            'knockout-amd-helpers',
            'text'
        ], boot);
    }

    function boot() {
        require(['app'], function (app) { app.activate(); });
    }
})();