// On va utiliser la methode toggle sur classList pour afficher le résultat
const result = document.querySelector('.result');

// déclaration des joueurs
const player1 = 'X';

const player2 = 'O';
// générer un chiffre aléatoire entre 0 et 1
let x = Math.floor(Math.random() * 2);
let player = ["O", "X"]; 
// initialise le joueurs actuel
let actualPlayer = player[x]; 
console.log(actualPlayer)

// sélection toutes les cases du DOM stoké dans la variable cases
const cases = document.querySelectorAll('.case');

// Créer un tableau qui contient 9 éléments "chaque elt correspond à une case"
let tab = ['','','','','','','','',''];

// avec la loop foreach on ajoute le click sur chaque case 

cases.forEach(caseClicked => {
    caseClicked.addEventListener('click', () => {
        // On cible la case clicquée à l'aide des méthode array.from() et indexOf() 
        const index = Array.from(cases).indexOf(caseClicked);
        // condition de vérification de l'état de la case cochée
        if (tab[index] === '') {
            tab[index] = actualPlayer;
            caseClicked.textContent = actualPlayer;
            //couleur du jeton en fonction du joueur
            if(caseClicked.textContent === 'X'){
                caseClicked.style.color = '#800'
            } else {
                caseClicked.style.color = '#080'
            }

            if(checkWin(actualPlayer)){
                // afficher la div resultat
                result.classList.toggle('show_result');
                result.innerHTML = `Le joueur ${actualPlayer} a gagné!<br>Appuyez sur "Entrée" pour recommencer.`;
                resetGame();
            }  else if ( tab.every(cell => cell !== '')) {
                // afficher la div resultat
                result.classList.toggle('show_result');
                result.innerHTML = `Match nul!<br> Appuyez sur "Entrée" pour recommencer.`;
                resetGame();
                
            }else {
                actualPlayer = (actualPlayer === player1) ? player2 : player1;
            }
        } else{
            alert("Cette case est déjà jouée!!!");

        }
        
    });
});

//fct° de vérification de victoire, ressece toutes les ligne gagnate
function checkWin (player) {
    const winLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical lines
        [0, 4, 8], [2, 4, 6]  // diagonal lines
    ];

    return winLines.some(combination => {
        const [a, b, c] = combination;
        return tab[a] === player && tab[b] === player && tab[c] === player
    });
}


function resetGame() {
    // on place un écouteur d'event de "keydown" au niveau du document
    document.addEventListener('keydown', function(event) {
         // virification si la touche est appuyée
        if(event.key === 'Enter') {
            // si oui  on efface le tableau et  le resultat
            tab = ['','','','','','','','',''];
            cases.forEach(caseClicked => {
                caseClicked.textContent = '';
            });
            result.classList.remove('show_result')
        }
    } )
   
}
resetGame();