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

const wordCountdown = ["NINE", "EIGHT", "SEVEN", "SIX", "FIVE", "FOUR", "THREE", "TWO", "ONE", "LAUNCHING.."];
let wordCounter = 0;
let fx;

const next = () => {
  fx.setText(wordCountdown[wordCounter]).then(() => {
    if (wordCounter < wordCountdown.length) setTimeout(next, 1000);
    else launchMeeting();
  });
  wordCounter++;
};

$(document).on("ready", function () {
  const eventDate = new Date($("#date__value").text());
  const currentDate = new Date();
  let diff = eventDate - currentDate;
  let countdownInterval = setInterval(function () {
    if (diff < 12000) {
      clearInterval(countdownInterval);
      startWorkCountdown();
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

function startWorkCountdown() {
  countdownClock.animate(
    {
      opacity: 0,
    },
    500,
    () => {
      countdownClock.html("<span id='word__countdown'>TEN</span>");
      const el = document.getElementById("word__countdown");
      countdownClock.animate(
        {
          opacity: 1,
        },
        500,
        () => {
          fx = new TextScramble(el);
          next();
        }
      );
    }
  );
}

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = Math.floor(Math.random() * 20) + start;
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class='light'>${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

function launchMeeting() {
  const link = $("#event__meeting__link").text();
  console.log(link);
  if (link.length > 4) window.location.replace(link);
}
