const express = require("express");
const tacheRepository = require("../repositories/tacheRepository");

const router = express.Router();

router.get("/api/taches", (_req, res) => {
  const taches = tacheRepository.findAll();
  res.json(taches);
});

router.post("/api/taches", (req, res) => {
  const { nom, couleur } = req.body;
  const colonne = tacheRepository.findColonneByName("A faire");

  if (!colonne) {
    return res.status(400).json({ error: "Colonne A faire introuvable" });
  }

  const newTache = {
    id: Date.now(),
    nom,
    couleur,
    colonne,
  };

  tacheRepository.save(newTache);

  return res.status(201).json(newTache);
});

module.exports = router;
