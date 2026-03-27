const { taches, colonnes } = require("../data/store");

const tacheRepository = {
  findAll() {
    return taches;
  },

  save(tache) {
    taches.push(tache);
    return tache;
  },

  findColonneByName(nom) {
    return colonnes.find((colonne) => colonne.intitule === nom);
  },
};

module.exports = tacheRepository;
