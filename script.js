let count = 0;

function setCount() {
  document.getElementById("output").innerText = count;
}

function setInitialCount() {
  setCount();
}

function increment() {
  count++;
  if (count > 10) {
    alert("Stop incriment");
    return;
  }
  setCount();
}

setInitialCount();
