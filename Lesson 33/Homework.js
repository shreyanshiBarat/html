let count = 0;
let intervalId = null;

function updateCounter() {
  document.getElementById("counter").innerText = count;
}

function startCounting() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      count++;
      updateCounter();
    }, 1000); // increases every second
  }
}

function stopCounting() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  stopCounting();
  count = 0;
  updateCounter();
}