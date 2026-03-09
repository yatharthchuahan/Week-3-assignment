/* TASK 4 — Countdown Timer */

const TOTAL_SECONDS = 60 * 60;
const RING_CIRC     = 628.32;
const WARNING_THRESHOLD = 60;

let remaining  = TOTAL_SECONDS;
let intervalId = null;
let isRunning  = false;

const timeDisplay = document.getElementById("timeDisplay");
const ringProgress = document.getElementById("ringProgress");
const btnStart    = document.getElementById("btnStart");
const btnPause    = document.getElementById("btnPause");
const btnReset    = document.getElementById("btnReset");
const messageWrap = document.getElementById("messageWrap");
const statusText  = document.getElementById("statusText");
const statusDot   = document.getElementById("statusDot");

function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateRing(secs) {
  const progress = secs / TOTAL_SECONDS;
  ringProgress.style.strokeDashoffset = RING_CIRC * (1 - progress);
}

function setWarningState(active) {
  timeDisplay.classList.toggle("warning", active);
  ringProgress.classList.toggle("warning", active);
}

function setStatus(state) {
  const labels = { ready: "READY", running: "RUNNING", paused: "PAUSED", done: "COMPLETE" };
  statusText.textContent = labels[state] || state;
  statusDot.className = `dot ${state === "ready" ? "" : state}`;
}

function render() {
  timeDisplay.textContent = formatTime(remaining);
  updateRing(remaining);
  setWarningState(remaining <= WARNING_THRESHOLD && remaining > 0);
}

function start() {
  if (isRunning || remaining <= 0) return;
  isRunning = true;

  intervalId = setInterval(() => {
    remaining--;
    render();

    if (remaining <= 0) {
      clearInterval(intervalId);
      isRunning = false;
      onComplete();
    }
  }, 1000);

  btnStart.disabled = true;
  btnPause.disabled = false;
  messageWrap.classList.remove("visible");
  setStatus("running");
}

function pause() {
  if (!isRunning) return;
  clearInterval(intervalId);
  isRunning = false;
  btnStart.disabled = false;
  btnPause.disabled = true;
  setStatus("paused");
}

function reset() {
  clearInterval(intervalId);
  isRunning  = false;
  remaining  = TOTAL_SECONDS;

  btnStart.disabled = false;
  btnPause.disabled = true;
  messageWrap.classList.remove("visible");
  setWarningState(false);
  setStatus("ready");
  render();
}

function onComplete() {
  remaining = 0;
  btnStart.disabled = true;
  btnPause.disabled = true;
  messageWrap.classList.add("visible");
  setStatus("done");
  render();
}

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);

render();
