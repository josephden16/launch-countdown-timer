var seconds = 60;
var secondsCountdown = setInterval(function () {
    if (seconds < 1) {
        seconds = 60;
    }
    else {
        seconds--;
        console.log("seconds - " + seconds);
    }
}, 1000);
var minute = 59;
var miuteCountdown = setInterval(function () {
    if (minute < 1) {
        clearInterval(miuteCountdown);
        return;
    }
    else {
        minute--;
        console.log("minute - " + minute);
    }
}, 1000 * 60);
