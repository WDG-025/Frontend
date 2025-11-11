let counter = 0;

function logInTimer() {
  console.log('Nach einer Sekunde');
}

// Signatur: setTimeout(Callbackfunktion, Zeit in ms): timerId
setTimeout(logInTimer, 1000);
// Zeit ist nicht präzise! Callback wird frühestens nach dem Timeout ausgeführt, sobald Ressourcen frei sind.

// typischerweise werden anonyme Arrow Functions als Callback genutzt
setTimeout(() => {
  console.log('Code nach einer Sekunde ausführen');
}, 1000);

console.log('Start des Scripts');

// Interval und Timeout geben ID zurück
const intervalId = setInterval(() => {
  counter++;
  console.log(new Date());
  console.log('Grüße aus dem Interval ' + counter);
}, 1000);

setTimeout(() => {
  // Entfernt den Timer wieder
  clearInterval(intervalId);
  //  clearTimeout(timeoutId)
}, 5000);
