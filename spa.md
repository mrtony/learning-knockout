使用knockoutjs作SPA的開發之路
===

使用knockoutjs作spa相對於angular+ui-router, 所能找到的資源較為有限. 要搭配作spa最重要的是route的library, 普遍用的有3個:
* [sammyjs](http://sammyjs.org/): john papa - code camper
* [directorjs](https://github.com/flatiron/director): onlyurei/knockout-spa
* [crossroadjs](https://millermedeiros.github.io/crossroads.js/): [sumitkm/BuildingSpaUsingKO- KnockoutJS | The Lazy Blogger](https://github.com/sumitkm/BuildingSpaUsingKO/tree/Part3)

而這3個route library各有使用旳人, 且也會有一些問題及限制.

### crossroad
在`KnockoutJS | The Lazy Blogger`中有完整的範例可供使用, 主要是用`knockoutjs component`技術, 每個頁面都是用component的方式來建立後
, 在route變換時更換component以變換畫面內容.

使用的方式大致如下:
1. 設定route
2. 加入要監控的url. 只要對應的url有出現, 就會執行callback, 改變`currentRoute`的值
3. `index.html`中使用component, 並將component的name使用currentRoute()的值來顯示該頁面的component.
4. 在`startup.js`中去呼叫`ko.applyBindings({ route: router.currentRoute });`, 只要currentRoute()改變, 就會顯示不同的component內容, 達成SPA的目的.
```
routes: [
    { url: '', params: { page: 'home' } },
    { url: 'settings', params: { page: 'settings' } }
]
ko.utils.arrayForEach(config.routes, function (route)
{
    crossroads.addRoute(route.url, function (requestParams)
    {
        currentRoute(ko.utils.extend(requestParams, route.params));
    });
});
```

### sammyjs
knockoutjs+sammyjs作spa, 

### codeCamper

切換route: 全部的page都全部載入並binding好view model. 在sammy偵測到change route後,會先hide(), 然後再去呼叫presenter.js中的
entranceThemeTransition去顯示將要顯示的頁面的設為show.

# 精選範例
- [Dynamically Changing Templates in KnockoutJS](http://www.knockmeout.net/2011/03/quick-tip-dynamically-changing.html)
- [AngularJS vs Knockout – SPA Routing/History (8 of 9)-knockoutjs+sammyjs-我參考的範例](http://blogs.lessthandot.com/index.php/webdev/uidevelopment/angularjs-vs-knockout-spa-routing-history-8/)