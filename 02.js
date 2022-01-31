let længde = 30;
let bredde = 4;
let areal = længde * bredde;
let resultat;

if (areal < 100) {
  resultat = "Arealet er for lille";
} else if (areal < 200) {
  resultat = "Arealet er ok";
} else {
  resultat = "Arealet er for stort";
}
console.log(resultat);
