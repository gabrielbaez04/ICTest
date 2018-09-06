window.helpers = (function () { 
  function renderElapsedString(remainingTime) {
    var newRemainingTime = remainingTime < 0 ? 0 : remainingTime ;
    return millisecondsToHuman(newRemainingTime);
  }

  function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

  function detectmob() {
    if(window.innerWidth <= 800 && window.innerHeight <= 600) {
      return true;
    } else {
      return false;
    }
  }

  function formatNumber(number){
    return Number(number).toLocaleString();
  }

  return {
    millisecondsToHuman,
    renderElapsedString,
    detectmob,
    formatNumber
  };
}());
  