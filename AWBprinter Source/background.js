//点击后将 js 注入页面
chrome.browserAction.onClicked.addListener(function (tab) {
	if ("http://accostest.airchinacargo.com/Flight_Manifest.asp" === tab.url) {
		chrome.tabs.executeScript({
			file: "contentscript_getinfo.js"
		});
	}
});
//接受剩余需要打印数量并显示出来
chrome.extension.onMessage.addListener(function(message, sender) {
	chrome.browserAction.setBadgeText({ "text": message-1 +"", "tabId": sender.tab.id});
});
