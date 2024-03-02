function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? 366 : 365;
}
function dateFormat(d) {
    let _day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    let _mon = d.getMonth() < 9 ? "0" + Number(d.getMonth() + 1) : d.getMonth() + 1;
    let _y = d.getFullYear();
    return _day + "/" + _mon + "/" + _y;
}
let c = new Date();
let s = c.getFullYear() + "-01-01";
let passDayOfYear = Math.round((new Date() - new Date(s)) / 86400000);
let currWeek = Math.ceil(passDayOfYear / 7);
let totalWeek = Math.ceil(daysInYear() / 7);

let o = {
    _pass: Math.round(passDayOfYear / daysInYear(c.getFullYear()) * 100),
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

document.getElementById("today").innerText = o._today;
document.getElementById("week").innerText = o._cW + "/" + o._tW;
document.getElementById("rest").innerText = o._rest + " days";
document.getElementById("progress-description").innerText = o._pass + "%";
let progress = document.querySelector("progress");
progress.setAttribute("value", o._pass);

if(o._pass < 20){
    progress.setAttribute("class", "progress");
}else if(o._pass < 30){ 
    progress.setAttribute("class", "pr-20");
}else if(o._pass < 50){
    progress.setAttribute("class", "pr-30");
}else if(o._pass < 75){
    progress.setAttribute("class", "pr-50")
}else if(o._pass < 90){
    progress.setAttribute("class", "pr-75");
}else{
    progress.setAttribute("class", "pr-90");
}

const ki_luat = [
    "Luôn đặt <b>KẾT QUẢ</b> lên hàng đầu, làm nhiều nhưng kết quả có hay không?",
    "Làm việc một cách <b>dứt điểm</b>, dù việc ít hay nhiều cũng phải dứt điểm trong ngày (hoặc chia thời gian một cách cụ thể).",
    " Luôn làm việc với tôn chỉ: <b>SỐ LƯỢNG</b> (nếu việc dễ) và <b>CHẤT LƯỢNG</b> (nếu việc khó).",
    "Hiểu những gì mình đang làm, hiểu càng sâu, làm việc càng hiệu suất và chất lượng.",
    "Luôn có <b>NHẬN THỨC</b> rõ ràng về tầm quan trọng của làm việc (không làm sẽ không có thu nhập, không phát triển được bản thân).",
    "Luôn có kế hoạch làm việc rõ ràng.",
]

let _quote = document.getElementsByClassName("quote")[0];
let _ul = document.createElement("ul");
_quote.appendChild(_ul);
for(let i=0; i<ki_luat.length; i++){
    let _li = document.createElement("li");
    let _p = document.createElement("p");
    _li.appendChild(_p);
    _p.innerHTML = ki_luat[i]
    _ul.appendChild(_li);
}