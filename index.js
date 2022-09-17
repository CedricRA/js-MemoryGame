isFirstElement = true;
isDisplaying = false;
firstElement = null;
secondElement = null;

function onLoad() {
  const mainDiv = document.getElementById('mainDiv');
  const cards = mainDiv.getElementsByClassName('card');
  const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple', 'teal', 'yellow',
                  'red', 'blue', 'green', 'orange', 'pink', 'purple', 'teal', 'yellow'];
  for(let i=0; i< cards.length; i++) {
    const randomNumber = getRandomInt(colors.length-1);
    const color = colors[randomNumber];
    colors.splice(randomNumber, 1);
    cards[i].classList.add(color);
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function onCardClick(e) {
  if (isFirstElement) {
    firstPairElementClicked(e);
  }
  else {
    secondPairElementClicked(e);
  }  
}

function firstPairElementClicked(e) {
  firstElement = e.target;
  isFirstElement = false;
  e.target.classList.remove("hidden");
}

function secondPairElementClicked(e) {
  if(isDisplaying) { return; }
  secondElement = e.target;
  isDisplaying = true;
  e.target.classList.remove("hidden");
  if(firstElement.classList[1] !== secondElement.classList[1]) {
    setTimeout(function() { resetElements(true); }, 1000);
  } else {
    setTimeout(function() { resetElements(false); }, 100);
  }
}

function resetElements(hideElements = false) {
  if(hideElements) {
    firstElement.classList.add("hidden");
    secondElement.classList.add("hidden");
  }
  isFirstElement = true;
  isDisplaying = false;
  checkIfGameWon();
}

function checkIfGameWon() {
  const mainDiv = document.getElementById('mainDiv');
  if(mainDiv.getElementsByClassName('hidden').length === 0) {
    alert("Gagné !");
  }
}

function playAgain() {
  location.reload();
}