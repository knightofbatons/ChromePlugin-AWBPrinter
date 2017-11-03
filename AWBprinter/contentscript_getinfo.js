window.localStorage.clear();
airwaybillList = [];
//获取页面信息
$("td[name=txtAwb]").each(function (index) {
    spantxt = '';
    spantxt = $(this).text();
    airwaybillList.push(spantxt);
});

//数组去重方法去重
Array.prototype.unique3 = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
};

//放入用于使循环正确和关闭页面
airwaybillList.push("THE END");

window.localStorage.setItem("printAWB", false);
var airwaybillListUnique = airwaybillList.unique3();
window.localStorage.setItem("AWBList", airwaybillListUnique);
console.log("AWB Printer: We will search & print ---> " + airwaybillListUnique);
window.open("http://accostest.airchinacargo.com/AWB_Information.asp");