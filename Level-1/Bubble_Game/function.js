function bubble(){
    var clutter = "";
    for(var i=0;i<152;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottom-panel").innerHTML = clutter;
}

var timer = 60;
function runtimer(){
    var stop = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(stop);
            document.querySelector("#bottom-panel").innerHTML = "Game Over";
        }
    }, 1000);
}

var hit_val = 0;
function gethit(){
    hit_val = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit_val;
}

var score_val = 0;
function score(){
    score_val += 10;
    document.querySelector("#scoreval").textContent = score_val;
}

document.querySelector("#bottom-panel").addEventListener("click", function(value){
    var num = Number(value.target.textContent);
    if(num === hit_val){
        score()
        bubble()
    }
})

gethit();
runtimer();
bubble();
// score();