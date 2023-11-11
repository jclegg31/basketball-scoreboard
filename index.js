//Declare a variable to hold the home score and reset it in the future
let homeScoreValue = 0;

function addOneHome() {
  homeScoreValue += 1;
  document.getElementById('home-score').textContent = homeScoreValue;
}

function addTwoHome() {
  homeScoreValue += 2;
  document.getElementById('home-score').textContent = homeScoreValue;
}

function addThreeHome() {
  homeScoreValue += 3;
  document.getElementById('home-score').textContent = homeScoreValue;
}

//Declare a variable to hold the guest score and reset it in the future
let guestScoreValue = 0;

function addOneGuest() {
  guestScoreValue += 1;
  document.getElementById('guest-score').textContent = guestScoreValue;
}

function addTwoGuest() {
  guestScoreValue += 2;
  document.getElementById('guest-score').textContent = guestScoreValue;
}

function addThreeGuest() {
  guestScoreValue += 3;
  document.getElementById('guest-score').textContent = guestScoreValue;
}

//Reset Game
function newGame() {
  homeScoreValue = 0;
  guestScoreValue = 0;
  document.getElementById('home-score').textContent = homeScoreValue;
  document.getElementById('guest-score').textContent = guestScoreValue;
}
