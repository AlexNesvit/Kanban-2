class Tache {
constructor(id, nom, couleur, colonne) {
this.id = id;
this.nom = nom;
this.couleur = couleur;
this.colonne = colonne;

this.validate();
}

validate() {
if (!this.nom || this.nom.trim() === "") {
throw new Error("Le nom de la tâche est obligatoire");
}
const hexColorRegex = /^[0-9A-Fa-f]{6}$/;
if (!hexColorRegex.test(this.couleur)) {
    throw new Error("La couleur doit être une valeur RGB hexadécimale sans dièse");
}
}
}

module.exports = Tache;