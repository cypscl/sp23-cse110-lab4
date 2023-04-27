let d = new Date();
let time = d.toLocaleTimeString();
setInterval(function(){
    d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
},1000);