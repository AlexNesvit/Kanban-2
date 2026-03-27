const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/server");

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
});
