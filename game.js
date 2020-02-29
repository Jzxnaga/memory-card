const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    
    hasFlippedCard = true;
    firstCard = this;

    return;

  }

  hasFlippedCard = false;
  secondCard = this;

  MatchOrNo();
}
// console.log(firstCard.dataset.image);
// console.log(secodCard.dataset.image);

function MatchOrNo() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  
    isMatch ? disableCards() : unflipCards();
  }
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 800);
  }
  
  cards.forEach(card => card.addEventListener('click', flipCard));