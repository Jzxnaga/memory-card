const cards = document.querySelectorAll('.memory-card');


function flipcard(){
    this.classlist.toggle('flip');
}

cards.forEach(card = > card.addEventListener('click',flipCard))