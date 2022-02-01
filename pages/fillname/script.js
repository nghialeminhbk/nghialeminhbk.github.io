function setName(){
    const user = document.getElementsByTagName("input")[0].value;
    // setCookie("username",user, 365);
    window.localStorage.setItem("name",user);
}

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

