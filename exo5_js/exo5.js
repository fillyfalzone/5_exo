const euroInput = document.getElementById('euro'); // cible les noeuds
const result = document.querySelector('.result'); // cible le noeud qui affiche le resultat

// fct° de conversion 
function convertToFrancs() {
    const euroValue = euroInput.value; // récupère la valeur du noeud input

    // si la valeur n'est pas vide
    if (euroValue != "") {

        // on verifie si la valeur saisie est un nombre
        if (isNaN(euroValue)) {
            result.textContent = 'Entrez une valeur numérique !';
            return;
        }

        // on convertit en francs
        let francs = parseFloat(euroValue) * 6.55957;
        // francs = francs.toFixed(2); //arrondire à 2 décimaux
        francs = (Math.round(francs * 100) / 100).toFixed(2);
        // ou en 1 ligne : const francs = (parseFloat(euroValue) * 6.55957).toFixed(2);

        // On affiche le resultat
        result.textContent = `${francs} francs`;
    } else {
        result.textContent = "";
    }
}

euroInput.addEventListener('input', convertToFrancs);

