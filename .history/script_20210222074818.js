'use strict';

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
