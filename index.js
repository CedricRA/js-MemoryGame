isFirstElement = true;
isDisplaying = false;
firstElement = null;
secondElement = null;

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