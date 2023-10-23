var timer = 60;
var score = 0;
var hitrn = 0;

// jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega,waha bhi naa milne par event parent ke parent ke parent par listener dhundega






// code for getting score val
function increaseScore(){
    score +=10;
    document.querySelector("#scorevar").textContent = score;
}



// code for getting new Hit 
function getNewHit(){
 hitrn =Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn;
}

// code for making bubbles
function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 147; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}


// code for timer
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
        // timer > 0 is taken because timer sholud not be negative
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);  // this will stop timer
      document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;  // this will disappear bubble
    }
  }, 1000);
}


// code for maching hit number and bubble number 

document.querySelector("#pbtm").addEventListener("click",function(dets){
var clickedum = Number(dets.target.textContent);
if(clickedum === hitrn){
    increaseScore();
    makebubble();
    getNewHit();
}
});



runTimer();
makebubble();
getNewHit();
increaseScore();
