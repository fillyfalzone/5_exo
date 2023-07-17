function getInformations() {
    // Récupérer la class
    const element = document.querySelector('.container');

    // Récupérer les styles de l'élément
    const styles = window.getComputedStyle(element);

    // Récupérer les informations nécessaires
    const classeCSS = element.className;
    const couleurTexte = styles.color;
    const couleurFond = styles.backgroundColor;
    const hauteurCarre = styles.height;
    const largeurCarre = styles.width;
    const policeTexte = styles.fontFamily;
    const tailleTexte = styles.fontSize;

    // Afficher les informations dans une boîte de dialogue
    const message = 
     `Informations sur la forme :
      Classe CSS : ${classeCSS}
      Couleur du texte: ${couleurTexte}
      Couleur de fond: ${couleurFond}
      Hauteur du carré: ${hauteurCarre}
      Largeur du carré: ${largeurCarre}
      Police du texte: ${policeTexte}
      Taille du texte: ${tailleTexte}`;

    alert(message);
  }
  








