// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
// Steps:

function displayClock() {
  let currentTime = new Date();

  let hoursOriginal = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let hours24 = hoursOriginal;
  if (hours24 < 10) {
    hours24 = String(hours24).padStart(2, "0");
  }

  let ampm = hoursOriginal >= 12 ? "PM" : "AM";

  let hours12 = hoursOriginal % 12 || 12;

  if (hours12 < 10) {
    hours12 = String(hours12).padStart(2, "0");
  }

  if (minutes < 10) {
    minutes = String(minutes).padStart(2, "0");
  }

  if (seconds < 10) {
    seconds = String(seconds).padStart(2, "0");
  }

  console.log(hours24 + ":" + minutes + ":" + seconds);
  console.log(hours12 + ":" + minutes + ":" + seconds + " " + ampm);

  setTimeout(displayClock, 1000);
}

displayClock();
