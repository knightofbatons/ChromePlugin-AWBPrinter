# ChromePlugin-AWBPrinter
### 插件可以做什么？

步骤 | 操作
------------ | -------------
1 | 在 `Flight_Manifest` 页面搜索出 `AWB List` 
2 | 点击使用插件
3 | 等待插件批量打印完成

>插件会跳转到 `AWB_Information` 页面进行批量打印并提示剩余需要打印数量，在打印完成后关闭页面。

>请勿在打印中关闭插件打开的页面，不然只能重新打印所有，选择打印还在添加中。

>需要关闭谷歌浏览器打印预览

方法为编辑浏览器的快捷方式，在 `目标` 栏最后加入
```
--kiosk-printing
```
加入后内容类似
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk-printing
```

>关闭打印预览后打印使用默认打印机

在 `chrome://print/` 可以对默认打印机进行设置