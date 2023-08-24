function currentTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let amPm = "AM";
  const hour = document.getElementById("hour");
  const minut = document.getElementById("minut");
  const second = document.getElementById("second");
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    amPm = "PM";
  }
  let hourdeg = 30 * (h - 3);
  let minutdeg = (360 / 60) * (60 + m);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + amPm;

  document.getElementById("oclock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
  hour.style.rotate = `${hourdeg}deg`;
  minut.style.rotate = `${minutdeg - 90}deg`;
  second.style.rotate = `${s * 6 - 90}deg`;
  let tictac = new Audio("./tictac.mp3");
  window.onload = tictac.play();
}
currentTime();
