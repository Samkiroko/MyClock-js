'use strict';
function setDate() {
  const now = new Data();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  console.log(seconds);
}

setInterval(setDate, 1000);
