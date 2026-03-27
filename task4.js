
function start()
{
    if(timeron == false)
    {
        timeron = true;
        countdown();
    }
}

function pause()
{
    timeron = false;
}

function reset()
{
    timeron = false;
    minutes = 60;
    seconds = 0;
    document.getElementById("timer-display").innerHTML = "60:00";
    document.getElementById("message-display").style.display = "none";
    document.getElementById("status-text").innerHTML = "READY";
}

var minutes = 60;
var seconds = 0;
var timeron = false;

function countdown()
{
    if(timeron == true)
    {
        seconds = seconds - 1;
        if(seconds < 0)
        {
            minutes = minutes - 1;
            seconds = 59;
        }
        
        var mintext = minutes;
        var sectext = seconds;
        if(minutes < 10) mintext = "0" + minutes;
        if(seconds < 10) sectext = "0" + seconds;
        
        document.getElementById("timer-display").innerHTML = mintext + ":" + sectext;
        
        if(minutes == 0 && seconds == 0)
        {
            timeron = false;
            document.getElementById("message-display").style.display = "block";
            document.getElementById("status-text").innerHTML = "DONE";
        }
        else
        {
            setTimeout("countdown()", 1000);
        }
    }
}