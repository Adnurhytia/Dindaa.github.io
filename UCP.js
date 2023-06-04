function updateDateTime() {
  var currentDateElement = document.getElementById("currentDate");
  var currentTimeElement = document.getElementById("currentTime");

  var currentDate = new Date();
  var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDateElement.innerText = currentDate.toLocaleDateString('en-US', dateOptions);

  var currentTime = currentDate.toLocaleTimeString('en-US');
  currentTimeElement.innerText = currentTime;

  var currentHour = currentDate.getHours();
  var greeting;

  if (currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingElement.innerText = greeting;
}
setInterval(updateDateTime, 1000);