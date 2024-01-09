// Example JavaScript for additional interactivity (you can add more as needed)
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Clicked on: ${card.querySelector('h3').textContent}`);
    });
});
