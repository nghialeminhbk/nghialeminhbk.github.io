console.log(document.cookie)

const array = [];

// dien vao ti le 10, 20, 50, 100
function init(x10, x20, x50, x100) {
    for (var i = 1; i <= x10; i++) {
        array.push("10.000");
    }

    for (var i = 1; i <= x20; i++) {
        array.push("20.000");
    }

    for (var i = 1; i <= x50; i++) {
        array.push("50.000");
    }

    for (var i = 1; i <= x100; i++) {
        array.push("100.000");
    }
}

function destroy() {
    for (var i = 1; i <= 100; i++) {
        array.pop();
    }
}

function loading() {
    var textNoti = document.getElementById("text-noti")
    var loading = document.getElementById("loading")
    var audio = document.getElementById("audio")
    var button = document.getElementById("btn1")
    audio.play();
    textNoti.setAttribute("hidden", "");
    loading.removeAttribute("hidden");
    setTimeout(() => {
        getRandom();
        audio.pause();
        button.setAttribute("disabled", "");
    }, 10000);
}

function getRandom() {
    var numberGen = document.getElementById("number")
    // hard code
    init(0, 0, 50, 50);
    let money = array[Math.floor((Math.random() * 100))]
    numberGen.innerHTML = `<span>Chúc mừng bạn nhận được lì xì mệnh giá</span> ( ` + money + ` đồng ) !!!`;
    console.log(money);
    destroy();
}

function getName() {
    let usernameE = document.getElementById("username");
    let username = window.localStorage.getItem("name");
    if (username == null || username == "") {
        window.location.replace("/pages/fillname/fillname.html");
        return;
    }
    usernameE.innerHTML = "\"" + window.localStorage.getItem("name") + "\"";
}