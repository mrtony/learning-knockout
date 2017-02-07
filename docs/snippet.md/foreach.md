foreach
===

# $data
use the special context property $data. Within a foreach block, it means “the current item”. $data是指向目前的item的物件。
```
<ul data-bind="foreach: months">
    <li>
        The current item is: <b data-bind="text: $data"></b>
    </li>
</ul>
```

[The "foreach" binding](http://knockoutjs.com/documentation/foreach-binding.html)