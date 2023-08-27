let [miliseconds, seconds, minutes] = [0,0,0];
let displayTime = document.getElementById("timer");
let increments = null;

function time(){
    
    miliseconds++;

    if(miliseconds == 100){
        seconds++;
        miliseconds = 0;

        if(seconds == 60){
            minutes++;
            seconds = 0;
        }

    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let mi = miliseconds < 10 ? "0" + miliseconds : miliseconds;
    displayTime.innerHTML = m + ":" + s + ":" + mi;

}

function startWatch(){
    if(increments !== null){
        clearInterval(increments);
    }
    increments = setInterval(time, 10);
}

function stopWatch(){
    clearInterval(increments);
}

function resetWatch(){
    clearInterval(increments);
    [miliseconds, seconds, minutes] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}


