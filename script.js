"use strict";
var seconds = document.getElementById("seconds");
var minute = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");
// Countdown Date set to the day this code was published
var countDownDate = new Date(2021, 0, 2).getTime();
// reset the time when the page loads
window.onload = function () {
    // Timer
    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        if (timeleft < 0) {
            seconds.textContent = "0";
            minute.textContent = "0";
            hours.textContent = "0";
            days.textContent = "0";
            clearInterval(countdown);
            return;
        }
        var d = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var h = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeleft % (1000 * 60)) / 1000);
        seconds.textContent = s;
        minute.textContent = m;
        hours.textContent = h;
        days.textContent = d;
    }, 1000);
};
