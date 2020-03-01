
const cards = document.querySelectorAll('.memory-card');
const reset = document.querySelectorAll('.reset-card');


let hasFlippedCard = false;
let lockCard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  console.log(FlippedCard)
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockCard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function resetCard() {
  
  this.classList.add('flip');
  setTimeout(() => {
 location.reload()
  }, 1000);



  
}






cards.forEach(card => card.addEventListener('click', flipCard));
reset.forEach(reset => reset.addEventListener('click', resetCard));