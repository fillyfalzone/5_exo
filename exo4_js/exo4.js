// créer le support des carrés
const screen = document.querySelector('.screen');
const body = document.querySelector('body');
body.appendChild(screen);



let maxSquare = 225; // nombre maximum de clone
let currentSquare = 0; // le compteur
 
 // fct° d'ajout de carrés
function addSquare () {
    // générer des nombre aléatoire pour la couleur en rgb
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

    // créer le carré
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = "60px";
    square.style.height = "60px";
    square.style.backgroundColor = color;
    // noirsir le carré au click 
    square.addEventListener('click', () => {
        square.style.backgroundColor = "#000";
    })
    screen.appendChild(square);
    currentSquare++; // J'incrémente les clone à chaque appel de la fonction
}

// fct° remove carré
function removeSquare() {
    let lastChild = screen.lastChild; // cibler le dernier enfant de screen
    screen.removeChild(lastChild) //retirer avec la méthode removeChild()
    currentSquare-- // désincrémenter le compteur
}

// créer l'évenement lorque la touche est appueée
document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowUp'){
        if(currentSquare < maxSquare){
            addSquare();
        }
    } else if(event.key === 'ArrowDown'){
        if (currentSquare > 0){
            removeSquare();
        } else{
            alert('Aucun carré n\'est ajouté')
        }
          
    }
})

