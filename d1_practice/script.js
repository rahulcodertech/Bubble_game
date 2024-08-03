var timer=60;
var score=0;
var hitrn=0;

function increasescore(){
    score +=10;
    document.querySelector(".svl").textContent=score;
}

function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=hitrn;
}

function makeBubble(){
    clutter="";
for(var i=1;i<=168;i++){
    var rn = Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runtTimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`Game over`;
        }
    },1000)
}
document.querySelector("#pbtm")
.addEventListener("click", function  (dets){
var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increasescore();
        makeBubble();
        getnewhit();
    }
})
makeBubble();
runtTimer();
getnewhit();

