// 1. On sélectionne les éléments
const searchInput = document.getElementById('searchInput');
const menuCards = document.querySelectorAll('.menu-card');
const noResult = document.getElementById('noResult');

// 2. On écoute quand l'utilisateur tape quelque chose
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    let countVisible = 0; // Pour compter si on trouve des résultats

    menuCards.forEach(card => {
        // On récupère tout le texte de la carte (titre + description)
        const content = card.textContent.toLowerCase();

        // On vérifie si le texte tapé est dans le contenu
        if (content.includes(searchValue)) {
            card.style.display = "block"; // On affiche
            countVisible++;
        } else {
            card.style.display = "none";  // On cache
        }
    });

    // Gestion du message "Aucun résultat"
    if (countVisible === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});