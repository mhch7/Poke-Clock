function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curMonth+" "+curDay+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
startTime();


function changeImage() {
  var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 8) {
        document.getElementById("img").src = "assets/night.png";
      }
      if (8 <= currentTime&&currentTime < 16) {
        document.getElementById("img").src = "assets/day.png";
      }
      if (16 <= currentTime&&currentTime < 24) {
        document.getElementById("img").src = "assets/dusk.png";
      }
      
}

changeImage();


function getStylesheet() {
  var currentTime = new Date().getHours();
  if (6 <= currentTime&&currentTime < 18) {
   document.write("<link rel='stylesheet' href='sun.css' type='text/css'>");
  }
  if (18 <= currentTime&&currentTime < 6) {
   document.write("<link rel='stylesheet' href='moon.css' type='text/css'>");
  }}

  getStylesheet();