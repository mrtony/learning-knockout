array操作
===

# remove item from array
使用knockout提供的`remove`來移除項目
```
my.vm.lines.remove(line);
```

# add
記得這裡的products不可用products()
```
my.vm.products.push(new Product())
```

# foreach
```
<tbody data-bind='foreach: lines'>
```

# 存取array的length
```
<span data-bind="lines().length"></span>
```