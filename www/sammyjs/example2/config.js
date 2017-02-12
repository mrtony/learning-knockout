define('config',
    ['jquery', 'knockout'],
    function ($, ko) {
      var pages = ['home', 'about'];

      var configureExternalTemplates = function configureExternalTemplates() {
        ko.amdTemplateEngine.defaultPath = '../templates';
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