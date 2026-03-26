const taches = [];

const tacheRepository = {
findAll() {
return taches;
},

findById(id) {
return taches.find(tache => tache.id === id);
},

save(tache) {
taches.push(tache);
return tache;
}
};

module.exports = tacheRepository;