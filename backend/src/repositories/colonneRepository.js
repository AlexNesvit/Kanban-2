const colonnes = [];

const colonneRepository = {
findAll() {
return colonnes;
},

findById(id) {
return colonnes.find(colonne => colonne.id === id);
},

save(colonne) {
colonnes.push(colonne);
return colonne;
}
};

module.exports = colonneRepository;