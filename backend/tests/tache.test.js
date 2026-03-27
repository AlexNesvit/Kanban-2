const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/server");
const { colonnes } = require("../src/data/store");

test("GET /api/taches should return tasks", async () => {
  const res = await request(app).get("/api/taches");
  assert.equal(res.statusCode, 200);
  assert.equal(Array.isArray(res.body), true);
});

test("POST /api/taches should create a task", async () => {
  const res = await request(app).post("/api/taches").send({
    nom: "Nouvelle tache",
    couleur: "ABCDEF",
  });

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.nom, "Nouvelle tache");
  assert.equal(res.body.colonne.intitule, "A Faire");
});

test("POST /api/taches should return 400 if A Faire does not exist", async () => {
  const originalColonnes = [...colonnes];
  colonnes.splice(
    0,
    colonnes.length,
    ...colonnes.filter((colonne) => colonne.intitule !== "A Faire")
  );

  try {
    const res = await request(app).post("/api/taches").send({
      nom: "Tache sans colonne",
      couleur: "123456",
    });

    assert.equal(res.statusCode, 400);
    assert.equal(res.body.error, "Colonne A Faire introuvable");
  } finally {
    colonnes.splice(0, colonnes.length, ...originalColonnes);
  }
});
