define('model.product',
    ['knockout'],
    function (ko) {
      var _product = function() {
        this.id = ko.observable(),
        this.name = ko.observable(),
        this.price = ko.observable(),
        this.stock = ko.observable()
      }

      return _product;
});