// Progammer le jeu du morpion entièrement en JS

// I) Mise en place des noeud du DOM
const body = document.querySelector('body');

const grid = document.createElement('div');
grid.classList.add('grid');

const block = document.createElement('div');
block.classList.add('block');

//hiérachisation des noeuds
body.appendChild(grid);

// stylisation de chaque noeud
body.style.height = "1000px";
body.style.display = "flex"
body.style.justifyContent = "center";
body.style.alignItems = "center"

grid.style.width = "640px";
grid.style.backgroundColor = "#B4CF6630";
grid.style.padding = "50px"
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.gap = "20px";

block.style.width = "200px";
block.style.height = "200px";
block.style.boxShadow = "0 0 10px #888";
block.style.display = "flex"
block.style.justifyContent = "center";
block.style.alignItems = "center"
block.style.fontFamily = "sans-serif";
block.style.fontWeight = "900"
block.style.fontSize = "70px";

// Clonnage des blocks
for(let i = 0; i < 9; i++){
    let newBlock = block.cloneNode();
    grid.appendChild(newBlock);
}

// II) Partie Script

// Déclaration des joueurs

const players = [
    {
        nom: "Paul",
        jeton: "X"
    },

    {
        nom: "Arnaud",
        jeton: "O"
    }
]

// Selection aléatoire du premier jouer
//nomber aléatoire entre 0 et 1
let x = Math.floor(Math.random() * 2);

let currentPlayerJeton = players[x].jeton;


//Création du tableau qui contient les block
let tab = ["", "", "", "", "", "", "","",""];

// fct° verification de victoire qui liste tout les ligne gagnantes

function checkWin(player){
    const winLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical lines
        [0, 4, 8], [2, 4, 6]  // diagonal lines
    ];

    // retourner la combinaison gagnante
    return winLines.some(combinaison => {
        const [a, b, c] = combinaison;
        return tab[a] === player && tab[b] === player && tab[c] === player
    });
}

//ajout du click sur chaque block de grid
const blocks = grid.querySelectorAll('.block')

blocks.forEach(element => {
    element.addEventListener('click', () => {
        // On cible la case clicquée à l'aide des méthode array.from() et indexOf() 
        const index = Array.from(blocks).indexOf(element);
         // condition de vérification de l'état de la case cochée
         if(tab[index] === ''){
            tab[index] = currentPlayerJeton;
            element.textContent = currentPlayerJeton;
            // la couleur du jeton
            if(element.textContent === 'X'){
                element.style.color = '#800'
            } else {
                element.style.color = '#080'
            }
            //viréfication si le coup est gagnant
            if(checkWin(currentPlayerJeton)){
                // message à afficher
                resetGame();
            } 
            //tout les blocks jouer sans victoire
            else if (tab.every(cell => cell !== "")){
                //message à afficher
                resetGame();
            }
            //si la partie continue
            else {
            // condition en ternaire
            currentPlayerJeton = (currentPlayerJeton === players[0].jeton) ? players[1].jeton : players[0].jeton;    
            }
         }

    });
});

//fct° de reset du jeu
function resetGame () {
    // on place un écouteur d'event de "keydown" au niveau du document
    document.addEventListener('keydown', function (event) {
       // virification si la touche est appuyée
       if(event.key === 'Enter') {
            // si oui  on efface le tableau et  le resultat
            tab = ['','','','','','','','',''];
            blocks.forEach(element => {
                element.textContent = '';
            });
       } 
    })
}
resetGame();









            