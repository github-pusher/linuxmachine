const hours = document.getElementsByClassName('Hours');
const minutes = document.getElementsByClassName('Minutes');
const seconds = document.getElementsByClassName('Seconds');

const clock = () => {
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); // 0 - 59
  let s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotate(hours[0], h);
  rotate(minutes[0], m);
  rotate(seconds[0], s);
  
  setTimeout(clock, 500);
}

const rotate = (target, value) => {
  target.style.transform =  `rotate(${value}deg)`;
}

window.onload = clock;
