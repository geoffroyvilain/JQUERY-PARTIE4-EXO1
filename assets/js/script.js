/*Créer une liste avec trois éléments (Pierre, Feuille, Ciseaux). Ajouter un bouton « Shifumi ! ».
Lorsque l'on clique sur « Shifumi ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux).
Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.

Bonus : Ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.*/
$(function(){
  $('#launchGame').click(function(){
// On déclare que la var shifumi est un tableau avec ses valeurs (de 0 à 2), ce qui représentera la valeur du choix de l'ordi
    var shifumi = ['Feuille', 'Ciseaux', 'Pierre'];
// On déclare que la var computer est aléatoirement choisie
// On la réalise : Math random pour 1 et 0 et *3 pour avoir 3 choix (pierre, feuille et ciseaux) et math floor pour rester en entier
    var computer = Math.floor(Math.random()*3);
// le choix du computer est égal au math floor sur le tableau shifumi
    var choiceComputer = shifumi[computer];
// on déclare que le choix de l'user correspond à l'option select en html
    var choiceUser = $('option:selected').val();
  console.log(choiceUser); // permet de recupérer le choix user
  console.log(choiceComputer); // permet de récupérer le choix pc
// si le choix de l'ordi = choix user alors égalité
  if (choiceComputer == choiceUser){
    alert('Égalité');
//  sinon si choix du pc = pierre et user à feuille ou choix user > choix pc alors victoire
  }else if((choiceComputer == 2 && choiceUser == 0) || (choiceUser > choiceComputer)){;
    alert('Vous avez gagné !')
//  sinon vous avez perdu
  }else{
    alert('Vous avez perdu !')
  }


  });
});
