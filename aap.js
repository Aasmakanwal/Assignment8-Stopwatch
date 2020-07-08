var sec = 0;
var min = 0;  
var msec = 0;
var minspan = document.getElementById("min")
var secspan = document.getElementById("sec")
var msecspan = document.getElementById("msec")
var interval;


function timer(){
    msec++
    msecspan.innerHTML = msec
    if (msec >= 100){
        sec++
        secspan.innerHTML = sec
        msec = 0 
    }else if (sec >=60){
        min++
        minspan.innerHTML = min
        sec = 0 
    }
}
function start(){
    if (!interval){
        interval = setInterval(timer, 10)
    }
}
function stop(){
    clearInterval(interval)
    interval = false
}
function reset(){
    sec = 0
    min = 0 
    msec = 0
    minspan.innerHTML = min
    secspan.innerHTML = sec
    msecspan.innerHTML = msec
    stop()
}