John Papa - Code Camper
===

# 檔案功能描述

* main.js: 第1個執行的程式, 主要用來設定載入的模組
* bootstrapper.js: 初始化的程式
* binder.js: 將vide model與view, 以ko.applyBinding作binding
* route-config.js: 定義所有頁面的route路徑, callback(切到這個route時要執行的), 以及對sammyjs作route的註冊.
* router.js: route切換發生時要執行的動作全部都在這裡.


# 功能描述

### 頁面抽換是怎麼做的?
整個程式的流程是這樣的:
1. 始全部的頁面的html就全部載入了(在index.cshtml中)
2. 取得所有需要的資料
3. 在binder.js中, 將vide model與各自的頁面作binding.
4. 註冊route. 至此已將環境設定完畢.
5. 開始處理route切換至`favorite`的動作 (在router.js中的setupGet()).
  - `options.callback(context.params);`: route中有帶參數的, 呼叫對應的vide model中設定的callback(這裡是activate())作設定
  - `$('.view').hide();`: 將全部的頁面都hide.
  - 在`presenter.js`的`transitionTo()`時, 將要顯示的view顯示出來.
