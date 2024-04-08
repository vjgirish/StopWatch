let milisecond = 0 ;
let second = 0;
let minute = 0;
let hour = 0;
let timerInterval;
function start(){
    if(!timerInterval){
        timerInterval = setInterval(timer, 10);
    }
}

function stop(){
    clearInterval(timerInterval);
    timerInterval = null;
}
function clearTime(){
    clearInterval(timerInterval);
    timerInterval = null;
        milisecond = 0;
        second = 0;
        minute = 0;
        hour = 0;
        document.getElementById('display').textContent = "00:00:00:00";
    }
function timer(){
    milisecond++;
    if(milisecond === 100){
        milisecond = 0;
        second++;
        if(second === 60){
           second = 0;
             minute++;
         if(minute === 60){
          minute = 0;
             hour++;
            }
        }       
    }
    const formattedTime = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}:${milisecond < 10 ? '0' + milisecond : milisecond}`;
    document.getElementById('display').textContent = formattedTime;
};


