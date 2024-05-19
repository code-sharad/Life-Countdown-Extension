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




function startCountdown(remainingSeconds) {
  const countdownContainer = document.getElementById("countdown-timer");
  const yearsContainer = document.querySelector("#years")
  const daysContainer = document.querySelector("#days")
  const hoursContainer = document.querySelector("#hours")
  const minutesContainer = document.querySelector("#minutes")
  const secondsContainer = document.querySelector("#seconds")

  function updateTimer() {
    if (remainingSeconds <= 0) {
      countdownContainer.textContent = "Time is up!";
      return;
    }

    const years = Math.floor(remainingSeconds / (365 * 24 * 3600));
    const days = Math.floor(
      (remainingSeconds % (365 * 24 * 3600)) / (24 * 3600)
    );
    const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    // countdownContainer.textContent = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s `;
    yearsContainer.textContent = years;
    daysContainer.textContent = days;
    hoursContainer.textContent = hours;
    minutesContainer.textContent = minutes;
    secondsContainer.textContent = seconds

    remainingSeconds--;
    setTimeout(updateTimer, 1000);
  }

  updateTimer();
}
