存取observable
===

http://knockoutjs.com/documentation/observables.html

# ko.observable objects are actually functions

# write
```
//設定1個值
myViewModel.personName('Mary')

//設定n個值
myViewModel.personName('Mary').personAge(50);
```

# read
```
myViewModel.personAge()
```