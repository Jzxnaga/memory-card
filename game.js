const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');

if(hasFlippedCard=false){

    hasFlippedCard=true
    FirstCard = this;

}else{

    hasFlippedCard = false
    seconCard = this;

// console.log(firstCard.dataset.image);
// console.log(secodCard.dataset.image);


if(firstCard.dataset.image === secodCard.dataset.image){
    firstCard.removeEventListener('click',flipCard);
    secodCard.removeEventListener('click',flipCard);
} else {
    
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}



    }
}





cards.forEach(card => card.addEventListener('click', flipCard));