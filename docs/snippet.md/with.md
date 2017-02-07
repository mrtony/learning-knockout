with
===

如果view model是有多層的物件，可以用with來簡化在html的data-binding.

view model
```
my.vm = {
    metadata: {
        pageTitle: "Knockout: Computed",
        personal: {
            link: "http://twitter.com/john_papa",
            text: "@john_papa"
        }
    }
};
```


html
```
<div class="header" data-bind="with: metadata">
    <h1 data-bind="text: pageTitle">
    </h1>
    <div data-bind="with:personal">
        <a href="00-index.html">Index</a> <a data-bind="attr: {href: link, title: text}, text: text"
            class="personalCss"></a>
    </div>
</div>
```