define('config',
    ['jquery', 'knockout'],
    function ($, ko) {
      var pages = ['home', 'about', 'product'];

      var configureExternalTemplates = function configureExternalTemplates() {
        ko.amdTemplateEngine.defaultSuffix = ".tmpl.html";
        ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
      };

      var init = function init() {
        configureExternalTemplates();
      };

      init();

      return {
        pages: pages
      }
    });