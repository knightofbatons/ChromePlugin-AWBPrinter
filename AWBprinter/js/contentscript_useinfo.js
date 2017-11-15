try {
    var airwaybillList = window.localStorage.getItem("AWBList").split(",");
    chrome.extension.sendMessage(airwaybillList.length);
    if (0 < airwaybillList.length) {
        var printAWB = window.localStorage.getItem("printAWB");
        "true" === printAWB && (localStorage.setItem("printAWB", !1), "EAW" != document.getElementsByName("pspl1")[0].value && "EAW" != document.getElementsByName("pspl2")[0].value && "EAW" != document.getElementsByName("pspl3")[0].value && "EAW" != document.getElementsByName("pspl4")[0].value && "EAP" != document.getElementsByName("pspl1")[0].value && "EAP" != document.getElementsByName("pspl2")[0].value && "EAP" != document.getElementsByName("pspl3")[0].value && "EAP" != document.getElementsByName("pspl4")[0].value &&
            "ECC" != document.getElementsByName("pspl1")[0].value && "ECC" != document.getElementsByName("pspl2")[0].value && "ECC" != document.getElementsByName("pspl3")[0].value && "ECC" != document.getElementsByName("pspl4")[0].value || document.getElementsByName("subprt")[0].click());
        setTimeout(function () {
            var a = airwaybillList.shift();
            window.localStorage.clear();
            "THE END" == a && window.close();
            if (0 != airwaybillList.length) {
                var b = document.getElementsByName("psref"), c = document.getElementsByName("pacn");
                b[0].value = a.slice(-8);
                c[0].value = a.slice(0, 3);
                window.localStorage.setItem("AWBList", airwaybillList);
                window.localStorage.setItem("printAWB", !0);
                document.getElementsByName("subtop")[0].click();
            }
        }, 2500);
    }
} catch (a) {
    console.log("AWB Printer: contentscript_useinfo won't run in this page "), console.log(a);
};