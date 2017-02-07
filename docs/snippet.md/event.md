event
===

# click
```
my.vm = {
    removeLine: function (line) {
        my.vm.lines.remove(line);
    }
};
<td style="width: 100px;">
    <a href='#' data-bind='click: $parent.removeLine'>Remove</a>
</td>
```