console.log(document.cookie)

const array = [];

for(var i=1; i<=10; i++){
    array.push("10.000");
}

for(var i=1; i<=30; i++){
    array.push("20.000");
}

for(var i=1; i<=20; i++){
    array.push("50.000");
}

for(var i=1; i<=3; i++){
    array.push("100.000");
}

function loading(){
    var textNoti = document.getElementById("text-noti")
    var loading = document.getElementById("loading")
    var audio =  document.getElementById("audio")
    var button = document.getElementById("btn1")
    audio.play();
    textNoti.setAttribute("hidden", "");
    loading.removeAttribute("hidden");
    setTimeout(()=>{
        getRandom();
        audio.pause();
        button.setAttribute("disabled","");
    }, 20000);
}

function getRandom() {
    var numberGen = document.getElementById("number")
    numberGen.innerHTML = `<span>Chúc mừng bạn nhận được lì xì mệnh giá</span> ( ` + array[Math.floor((Math.random() * 33))]  + ` đồng ) !!!`;
  } 

function getName(){
    var username = document.getElementById("username");
    username.innerHTML = "\"" + window.localStorage.getItem("name") + "\"";
}