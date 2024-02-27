function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}
function dateFormat(d){
    return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}
let c = new Date();
let s = c.getFullYear() + "-01-01";
let passDayOfYear = Math.round((new Date() - new Date(s)) / 86400000);
let currWeek = Math.ceil(passDayOfYear / 7);
let totalWeek = Math.ceil(daysInYear() / 7);
 
let o = {
    _pass: Math.round(passDayOfYear / daysInYear(c.getFullYear()) * 100) + "%",
    _rest: Number(daysInYear() - passDayOfYear),
    _today: dateFormat(c),
    _cW: currWeek,
    _tW: totalWeek,
}
 
console.log("======= " + c.getFullYear() + " =======");
console.log("Da troi qua: " + o._pass);
console.log("So ngay con lai: " + o._rest);
console.log("Hnay la: " + o._today);
console.log("Tuan hien tai: " + o._cW + "/" + o._tW);
console.log("=====================");