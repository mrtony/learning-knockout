form
===

# select option list
顯示一個可選擇單一項目的list.


- options: 
指向陣列或ko.observableArray()，KO會將陣列元素轉換為下拉選項。如果是ko.observableArray()，當動態增加或移除陣列元素時，下拉選項也會馬上跟著增減。

- optionsText, optionsValue: 
用來產生下拉選項的陣列元素可以是具有多個屬性的JavaScript物件，透過optionText, optionValue設定屬性名稱字串，我們可以指定用哪個屬性當成<option>的文字內容，哪個屬性當成value。

- value: 
指向ViewModel的特定屬性，屬性一般以ko.observable()宣告。如此當下拉選單選取新值，所選的<option> value值會更新到ViewModel屬性上；而一旦該屬性被程式修改或因使用者輸入改變，下拉選單也會自動切到新值對應的<option>選項上。

- selectedOptions: 
針對可多選(multiple)的`<select>`，selectedOptions可繫結到ko.observableArray()型別屬性，該陣列使會即時反應使用者所選取的項目集合；而變更該obervableArray陣列的元素項目，也會立刻變更對應option的selected狀態。


```
<select data-bind="options:$parent.products, value:product, optionsText: 'shortDescription', optionsCaption:'Select a product ...'">
</select>
```

# select multiple items
顯示一個可選擇多個項目的list.