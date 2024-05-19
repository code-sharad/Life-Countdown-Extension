chrome.storage.local.get(["countdownStart", "countdownDuration"], (data) => {
  if (
    data.countdownStart !== undefined &&
    data.countdownDuration !== undefined
  ) {
    const elapsed = Math.floor((Date.now() - data.countdownStart) / 1000);
    const remainingSeconds = data.countdownDuration - elapsed;
    startCountdown(remainingSeconds);
  }
});

async function getQuotes() {}

const countdownContainer = document.getElementById("countdown-timer");
const yearsContainer = document.querySelector("#years");
const daysContainer = document.querySelector("#days");
const hoursContainer = document.querySelector("#hours");
const minutesContainer = document.querySelector("#minutes");
const secondsContainer = document.querySelector("#seconds");
const countdownNum = document.getElementById("countdown");
const countDownName = document.getElementById("name");
const microsecondsContainer = document.querySelector("#micro"); 
countDownName.style.display = "none";
countdownNum.style.display = "none";

function startCountdown(remainingSeconds) {
  if (remainingSeconds > 0) {
    countDownName.style.display = "flex";
    countdownNum.style.display = "flex";
    countdownNum.style.marginBottom = "14rem";
  }
  function updateTimer() {
    if (remainingSeconds <= 0) {
      countdownContainer.textContent =
        "Time is up! Click on the Life Countdown extension icon to set timer";
      return;
    } else {
      countdownContainer.textContent = "";
    }

    const years = Math.floor(remainingSeconds / (365 * 24 * 3600));
    const days = Math.floor(
      (remainingSeconds % (365 * 24 * 3600)) / (24 * 3600)
    );
    const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = Math.floor(remainingSeconds % 60);
    const microseconds = Math.floor((remainingSeconds % 1) * 1000);
    // countdownContainer.textContent = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s `;
    yearsContainer.textContent = years;
    daysContainer.textContent = days;
    hoursContainer.textContent = hours;
    minutesContainer.textContent = minutes;
    secondsContainer.textContent = seconds;
    microsecondsContainer.textContent = microseconds;

    remainingSeconds -= 0.01;
    setTimeout(updateTimer, 1);
  }

  updateTimer();
}
