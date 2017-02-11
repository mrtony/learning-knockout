Notes
===

### app.run
基本上就是啟動sammy之前註冊的route
* app.run():
* app.run('#/')
* app.run('#/home')

### 一般的用法
```
var viewName = ko.observable('');
var app = sammy(function () {
        this.get('#:view', function () {
            vm.viewName(this.params.view);
        });
    });

app.run('#home');
```

1. this.get: 設定只要做`http get`時, 就會執行callback
2. #:view： url的參數. for example, `module_index.html#home`, 則`view`就是`home`
3. vm.viewName(this.params.view): 設定viewName為home