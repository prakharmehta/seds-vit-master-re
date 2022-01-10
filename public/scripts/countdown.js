const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const secondElement = $("#seconds");
const minuteElement = $("#minutes");
const hourElement = $("#hours");
const dayElement = $("#days");

const countdownContainer = $("#countdown");
const countdownClock = $(".countdown__clock");
let countdown_visible = false;

const wordCountdown = ["TEN", "NINE", "EIGHT", "SEVEN", "SIX", "FIVE", "FOUR", "THREE", "TWO", "ONE", "LAUNCHING"];

$(document).on("ready", function () {
  const eventDate = new Date($("#date__value").text());
  const currentDate = new Date();
  let diff = eventDate - currentDate;
  let countdownInterval = setInterval(function () {
    if (diff < 1000) {
      clearInterval(countdownInterval);
      // startWorkCountdown();
    }
    updateCountdown(diff);
    diff -= 1000;
  }, seconds);
});

function updateCountdown(diff) {
  const daysLeft = Math.floor(diff / days);
  const hoursLeft = Math.floor((diff % days) / hours);
  const minutesLeft = Math.floor((diff % hours) / minutes);
  const secondsLeft = Math.floor((diff % minutes) / seconds);
  dayElement.text(daysLeft < 10 ? "0" + daysLeft : daysLeft);
  hourElement.text(hoursLeft < 10 ? "0" + hoursLeft : hoursLeft);
  minuteElement.text(minutesLeft < 10 ? "0" + minutesLeft : minutesLeft);
  secondElement.text(secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);

  if (!countdown_visible)
    countdownContainer.animate(
      {
        opacity: 1,
      },
      300
    );
}

// function startWorkCountdown() {
//   countdownClock
//     .animate(
//       {
//         opacity: 0,
//       },
//       300
//     )
//     .html(wordCountdown[0]);
// }
