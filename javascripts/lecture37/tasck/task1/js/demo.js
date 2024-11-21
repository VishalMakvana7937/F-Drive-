
    let startBtn  = document.getElementById("start");
    console.log(startBtn);

    let resetBtn = document.getElementById("reset");
    console.log(resetBtn);

    let seconds = 1;
    let minuts = 0;   
    let hours = 0;

    resetBtn.addEventListener('click', function (){
        timer = stop;
        seconds = 0;
        minuts = 0;
        hours = 0;
        // resetBtn();
    });
    
    startBtn.addEventListener('click', function (){
        timer = true;
        stopWatch();
    });

function stopWatch(){

    let stopBtn  = document.getElementById("stop");
    console.log(stopBtn);

    stopBtn.addEventListener('click', function (){
        timer = false;
    });

    let timer = document.getElementById('cnt');
    setInterval(() => {
        timer.innerHTML=`${hours}:${minuts}:${seconds}`;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minuts++;
        }

        if(minuts == 60){
            minuts = 0;
            hours++;
        }
    },1000);

}
