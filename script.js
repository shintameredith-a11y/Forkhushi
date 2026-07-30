document.getElementById("startBtn").addEventListener("click", function () {
    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });
});

const targetDate = new Date("2026-08-01T00:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){
        document.getElementById("timer").innerHTML="❤️ Happy Girlfriend Day ❤️";
        return;
    }

    const days=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const mins=Math.floor((distance%(1000*60*60))/60000);
    const secs=Math.floor((distance%(60000))/1000);

    document.getElementById("timer").innerHTML=
    days+" Days "+
    hours+" Hours "+
    mins+" Minutes "+
    secs+" Seconds";
}

setInterval(updateTimer,1000);

updateTimer();

document.getElementById("loveButton").addEventListener("click",function(){

document.getElementById("loveMessage").innerHTML=
"I love you forever, Khushi ❤️";

document.getElementById("music").play();

});
