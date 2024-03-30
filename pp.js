let [hours, minutes, seconds] = [0,0,0];
let displaytime = document.getElementById("displaytime");
let timer = null

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    displaytime.innerHTML = hours +":"+ minutes +":"+ seconds;
}

function watchstart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displaytime.innerHTML = "00:00:00";
}