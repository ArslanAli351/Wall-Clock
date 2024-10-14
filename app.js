let handler = document.querySelector("#handler");
let handler2 = document.querySelector("#handler2");
let handler3 = document.querySelector("#handler3");
let second = 0;
let minutes = 0;
let houre = 0;
let curentDate = new Date();
setInterval(() => {
    curentDate = new Date()
    second = curentDate.getSeconds() * 6;
    minutes = curentDate.getMinutes() * 6;
    houre = curentDate.getHours() * 30 + Math.round(minutes / 12);
    document.getElementById("second").style.transform = "rotate(" + second + "deg)"
    document.getElementById("minute").style.transform = "rotate(" + minutes + "deg)"
    document.getElementById("hour").style.transform = "rotate(" + houre + "deg)"
}, 1000)