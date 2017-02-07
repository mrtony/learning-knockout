computed
===

computed可以用function或物件的方式建立.

物件
```
vm.extednPrice = function({
  read: function() {
    //return an expression with observables
  },
  write: function() {
    //parse value and store in obervable
  },
  owner: //put your view model here
});
```

函式
```
self.extendedPrice = ko.computed(function () {
    return self.product() ? self.product().salePrice() * parseInt("0" + self.quantity(), 10) : 0;
});
```