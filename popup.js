document.getElementById("start").addEventListener("click", () => {
  const years = parseInt(document.getElementById("years").value) || 0;
  const days = parseInt(document.getElementById("days").value) || 0;
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  const totalSeconds =
    years * 365 * 24 * 3600 +
    days * 24 * 3600 +
    hours * 3600 +
    minutes * 60 +
    seconds;
  const startTime = Date.now();

  chrome.storage.local.set({
    countdownStart: startTime,
    countdownDuration: totalSeconds,
  });
});
