
let seconds: number = 60;
let secondsCountdown = setInterval(function () {
  if (seconds < 1) {
    seconds = 60;
  } else {
    seconds--;
    console.log("seconds - " + seconds);
  }
}, 1000);

let minute: number = 59;
let miuteCountdown = setInterval(function () {
  if (minute < 1) {
    clearInterval(miuteCountdown);
    return;
  } else {
    minute--;
    console.log("minute - " + minute);
  }
}, 1000 * 60);
