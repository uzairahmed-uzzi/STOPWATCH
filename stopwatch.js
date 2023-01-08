var interval;
var msec = 0;
var sec = 0;
var min = 0;
var minh = document.getElementById("min");
var sech = document.getElementById("sec");
var msech = document.getElementById("msec");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var save = document.getElementById("save");
var smin;
var ssec;
var smsec;

function setTimer() {
    msec++;
    msech.innerHTML = msec;
    if (msec == 100) {
        sec++;
        sech.innerHTML = sec;
        msec = 0;
    } else if (sec == 60) {
        min++;
        minh.innerHTML = min;
        sec = 0;
    }


}



start.onclick = function() {
    reset.disabled = false;
    stop.disabled = false;
    start.disabled = true;
    interval = setInterval(setTimer, 10);
}
save.onclick = function() {
    smin = min;
    ssec = sec;
    smsec = msec;
    var history = [smin, ssec, smsec];

}

stop.onclick = function() {
    start.disabled = false;
    stop.disabled = true;
    clearInterval(interval);
}
reset.onclick = function() {
    start.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
    minh.innerHtml = 0;
    sech.innerHtml = 0;
    msech.innerHtml = 0;
    msec = 0;
    sec = 0;
    min = 0;
    clearInterval(interval);

}