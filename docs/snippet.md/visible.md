visible
===

```
this.showSomething = ko.observable(false);
<div data-bind="visible: showSomething" style="display:none"></div>
why display: none? avoid flicker
```