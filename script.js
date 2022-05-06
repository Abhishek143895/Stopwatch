let seconds = 00;
let tens = 00;
let mins = 00;

// ======================================================= Fetching ==========================================================================================

let getSeconds = document.getElementById("seconds");
let getTens = document.getElementById("tens");
let getMins = document.getElementById("mins");
let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let btnReset = document.getElementById('btn-reset');
let interval;

// ========================================================= Event Handling ==================================================================================

btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener("click", () => {
    clearInterval(interval);
})

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    mins = "00"
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
})

// =============================================================== Function ================================================================= 

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = "0" + mins;
        seconds = 0;
        getSeconds.innerHTML = "0" + 0;
    }
    if(mins > 9){
        getMins.innerHTML = mins;
    }

}

