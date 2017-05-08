const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hour-hand');

function date(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDeg = (seconds/60)*360 +90;
    const minutesDeg = (minutes/60)*360 +90;
    const hoursDeg = (hours/60)*360 +90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    console.log(hours +":"+minutes + ":"+seconds);



}
setInterval(date,1000);
