const secondsHand = document.querySelector(".hand_seconds");
const minutesHand = document.querySelector(".hand_minutes");
const hoursHand = document.querySelector(".hand_hour");

function setDate() {
  const Now = new Date();
  const Seconds = Now.getSeconds();
  const SecondsDegree = (Seconds / 60) * 360 + 90;
  if (SecondsDegree === 444) {
    secondsHand.style.transition = "none";
    secondsHand.style.transition = " all .4s cubic-bezier(.83,-0.07,1,2.11)";
    setTimeout(function () {
      secondsHand.style.transition = "none";
    }, 1000);
  }
  secondsHand.style.transform = `rotate(${SecondsDegree}deg)`;
  secondsHand.style.transition = " all .4s cubic-bezier(.83,-0.07,1,2.11)";

  const Minutes = Now.getMinutes();
  const MinutesDeg = (Minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${MinutesDeg}deg)`;

  const Hours = Now.getHours();
  const HoursDeg = (Hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${HoursDeg}deg)`;
}

setInterval(setDate, 1000);
