# ChromePlugin-AWBPrinter
### 插件可以做什么？

步骤 | 操作
------------ | -------------
1 | 在 `Flight_Manifest` 页面搜索出 `AWB List` 
2 | 点击使用插件
3 | 等待插件批量打印完成

>插件会跳转到国内 `Domestic_AWB_Information` 和国际 `AWB_Information` 页面进行批量打印并分别提示剩余需要打印数量，在打印完成后自动关闭页面，请勿在打印中关闭插件打开的页面，不然本插件只能重新打印所有，因为选择打印有待添加。

>需要关闭谷歌浏览器打印预览，右键编辑你使用的浏览器的快捷方式，在 `目标` 栏最后加入：
```
--kiosk-printing
```
>示例：
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk-printing
```

>关闭打印预览后浏览器打印使用默认打印机，在 `chrome://print/` 可以对浏览器默认打印机进行设置。
