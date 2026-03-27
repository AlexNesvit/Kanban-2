const colonnes = [
  { id: 1, intitule: "A faire" },
  { id: 2, intitule: "En cours" },
  { id: 3, intitule: "A controler" },
  { id: 4, intitule: "Termine" },
];

const taches = [
  {
    id: 1,
    nom: "Preparer les materiaux",
    couleur: "FF0000",
    colonne: colonnes[0],
  },
  {
    id: 2,
    nom: "Assembler les pieces",
    couleur: "00FF00",
    colonne: colonnes[1],
  },
];

module.exports = { colonnes, taches };
