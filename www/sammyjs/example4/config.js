define('config',
    ['jquery', 'knockout'],
    function ($, ko) {
      var pages = [{
        name: 'home', 
        text: '首頁'
      }, {
        name: 'about',
        text: '列表'
      }];

      var configureExternalTemplates = function configureExternalTemplates() {
        ko.amdTemplateEngine.defaultPath = '../templatesB3';
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