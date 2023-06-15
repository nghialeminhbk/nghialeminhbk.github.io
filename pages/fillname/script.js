function setName(){
    const user = document.getElementsByTagName("input")[0].value;
    if(user == ""){
        alert("Điền tên zô đã rồi chơi !");
        return;
    }
    window.localStorage.setItem("name",user);
    window.location.replace("/pages/play/play.html");
}

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

