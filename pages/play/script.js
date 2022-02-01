const array = [];

for(var i=1; i<=10; i++){
    array.push("10.000");
}

for(var i=1; i<=10; i++){
    array.push("20.000");
}

for(var i=1; i<=10; i++){
    array.push("50.000");
}

for(var i=1; i<=3; i++){
    array.push("100.000");
}

function getRandom() {
    var numberGen = document.getElementById("number")
    numberGen.innerHTML = `<span>Chúc mừng bạn nhận được lì xì mệnh giá</span> ( ` + array[Math.floor((Math.random() * 33))]  + ` đồng ) !!!`;
  } 