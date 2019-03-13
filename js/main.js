let cards = Array.from(document.querySelectorAll(".step-hidden"));
let button = document.querySelector('.button');

button.addEventListener('click', displayCards);

cards.forEach(function (card) {
    card.style.display = "none";
});

function displayCards() {
    if (button.textContent === "See More Projects?") {
        button.textContent = "See Less?";
        cards.forEach(function (card) {
            card.style.display = "block";
        });

    } else {
        button.textContent = "See More Projects?";
        cards.forEach(function (card) {
            card.style.display = "none";
        });
        button.scrollIntoView(button);
    }
}
