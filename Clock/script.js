const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const clockContainer =  document.querySelector(".clock");

function analogClock() {
  const now = new Date();

  const miliseconds = now.getMilliseconds();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds+(miliseconds/1000)) /  60 * 360  + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = hour / 12 * 360 + mins / 60 * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const delay = 1000;
function initialAnalogClock(){
     clockContainer.style.visibility = 'visible';
    analogClock();
    setInterval(analogClock,delay);
}
initialAnalogClock();