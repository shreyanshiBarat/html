let count = 0;
let intervalId = null;

function updateCounter() {
  document.getElementById("counter").innerText = count;
}

function startCounting() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      count++;
       // Check if number is odd
  if (count % 2 !== 0) {
    console.log(`Odd number found: ${count}`);
  }
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
function startCounting() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      count++;
      
      if (count % 2 !== 0) {
        console.log(`Odd number found: ${count}`);
        updateCounter(); // Only update the UI if it's odd
      }
    }, 1000); 
  }
}