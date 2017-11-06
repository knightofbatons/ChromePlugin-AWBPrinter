window.localStorage.clear();
airwaybillList = [];
$("td[name=txtAwb]").each(function (b) {
    spantxt = "";
    spantxt = $(this).text();
    airwaybillList.push(spantxt);
});
Array.prototype.unique3 = function () {
    for (var b = [], c = {}, a = 0; a < this.length; a++) {
        c[this[a]] || (b.push(this[a]), c[this[a]] = 1);
    }
    return b;
};
airwaybillList.push("THE END");
window.localStorage.setItem("printAWB", !1);
var airwaybillListUnique = airwaybillList.unique3();
window.localStorage.setItem("AWBList", airwaybillListUnique);
console.log("AWB Printer: We will search & print ---\x3e " + airwaybillListUnique);
window.open("http://accos.airchinacargo.com/AWB_Information.asp");