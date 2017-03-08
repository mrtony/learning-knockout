Revealing Model Pattern
===

view model (controller)使用revealing model pattern, 避免在使用this會發生一些混淆.

1. 不使用閉包
```
var my.ViewModel = (function() {
  var me = {
    catelogy: []
  };

  return me;

})();
```
