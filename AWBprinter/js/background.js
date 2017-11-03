chrome.browserAction.onClicked.addListener(function (a) {
	"http://accostest.airchinacargo.com/Flight_Manifest.asp" === a.url && chrome.tabs.executeScript({ file: "js/contentscript_getinfo.js" });
});
chrome.extension.onMessage.addListener(function (a, b) {
	chrome.browserAction.setBadgeText({ text: a - 1 + "", tabId: b.tab.id });
});