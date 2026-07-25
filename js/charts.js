/* ======================================================
   بوابة المحقق الرقمي
   charts.js
====================================================== */

/* ==========================
   Attack Chart
========================== */

const attackCanvas = document.getElementById("attackChart");

if (attackCanvas) {

new Chart(attackCanvas,{

type:"line",

data:{

labels:[
"يناير",
"فبراير",
"مارس",
"أبريل",
"مايو",
"يونيو",
"يوليو"
],

datasets:[{

label:"الهجمات الإلكترونية",

data:[
120,
190,
300,
280,
420,
390,
510
],

borderColor:"#00e5ff",

backgroundColor:"rgba(0,229,255,.15)",

fill:true,

tension:.4,

borderWidth:3,

pointRadius:5,

pointBackgroundColor:"#00e5ff"

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{
color:"#ffffff"
}
}
},

scales:{

x:{
ticks:{
color:"#ffffff"
},
grid:{
color:"rgba(255,255,255,.08)"
}
},

y:{
beginAtZero:true,
ticks:{
color:"#ffffff"
},
grid:{
color:"rgba(255,255,255,.08)"
}
}

}

}

});

}

/* ==========================
   Threat Chart
========================== */

const threatCanvas = document.getElementById("threatChart");

if(threatCanvas){

new Chart(threatCanvas,{

type:"doughnut",

data:{

labels:[
"Malware",
"Phishing",
"Ransomware",
"DDoS",
"Botnet"
],

datasets:[{

data:[
35,
25,
15,
15,
10
],

backgroundColor:[
"#00e5ff",
"#00c853",
"#ff9800",
"#ff5252",
"#7c4dff"
],

borderWidth:0

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom",

labels:{
color:"#ffffff",
padding:20
}

}

}

}

});

}

/* ==========================
   Live Counter
========================== */

setInterval(()=>{

document.querySelectorAll(".counter").forEach(counter=>{

let value=parseInt(counter.innerText);

let increase=Math.floor(Math.random()*3);

counter.innerText=value+increase;

});

},5000);

/* ==========================
   System Status
========================== */

console.log("Digital Investigator Portal Ready");

/* ==========================
   Welcome Message
========================== */

setTimeout(()=>{

console.log("مرحباً بك في بوابة المحقق الرقمي");

},1000);
