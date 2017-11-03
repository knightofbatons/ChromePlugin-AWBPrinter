//尝试获取 AWBList 没有就不运行本 JS 文件
try {
    var airwaybillList = window.localStorage.getItem("AWBList").split(",");
    //把剩余需要打印的数量发送
    chrome.extension.sendMessage(airwaybillList.length);
    if (airwaybillList.length > 0) {

        var printAWB = window.localStorage.getItem("printAWB");
        if ("true" === printAWB) {
            localStorage.setItem("printAWB", false);
            document.getElementsByName("subprt")[0].click();
        }

        setTimeout(function () {
            //从数组头部删除并返回
            var airWaybill = airwaybillList.shift();

            window.localStorage.clear();
            //打印完关闭页面
            if ("THE END" == airWaybill) {
                window.close();
            }
            //如果列表中还有 airwaybill
            if (0 != airwaybillList.length) {
                //操作 DOM 赋值
                var psref = document.getElementsByName('psref');
                var pacn = document.getElementsByName('pacn');
                //取后8位
                psref[0].value = airWaybill.slice(-8);
                //取前3位
                pacn[0].value = airWaybill.slice(0, 3);

                window.localStorage.setItem("AWBList", airwaybillList);
                window.localStorage.setItem("printAWB", true);

                document.getElementsByName('subtop')[0].click();
            }
            //设置搜索操作的延时（毫秒
        }, 2500);

    };

} catch (e) {
    console.log("AWB Printer: contentscript_useinfo won't run in this page ");
    console.log(e);
};