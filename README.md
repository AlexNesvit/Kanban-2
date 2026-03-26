# FT Alex — Étude de cas KANBAN (réponses)

## Exercice 1 — Hypothèse MVP

### Hypothèse de départ
Si l’atelier visualise ses ordres de fabrication sur un tableau Kanban numérique unique (colonnes + cartes), alors les chefs d’équipe pourront prioriser plus vite, réduire les encours inutiles et limiter les retards de livraison.

### Cible
- Responsable de production
- Chef d’équipe atelier
- Opérateur de suivi de fabrication

### Problème utilisateur à résoudre
Aujourd’hui, l’entreprise manque de visibilité en temps réel sur l’état des tâches et les priorités changent souvent. Cela crée des retards, des erreurs de planification et une surcharge de travail en cours.

### Proposition de valeur
Une application web simple, visuelle et partagée qui montre instantanément :
- où se trouve chaque tâche,
- quelles tâches sont prioritaires,
- quelles étapes sont bloquantes.

### Fonctionnalités **incluses** dans le MVP
1. Affichage d’un tableau Kanban avec 4 colonnes (À faire, En cours, À contrôler, Terminé).
2. Affichage des tâches avec leur nom et couleur.
3. API backend pour lire la liste des tâches (`GET /api/taches`).
4. Initialisation projet en architecture fullstack séparée : frontend React + backend Node.js REST.
5. Point de santé backend (`GET /health`) pour vérifier le démarrage.

### Fonctionnalités **exclues** du MVP
1. Authentification/gestion des rôles.
2. Drag-and-drop temps réel.
3. Notifications (email, SMS, Teams, etc.).
4. Historique détaillé/audit des changements.
5. Reporting avancé (KPI, lead time, throughput).
6. Gestion multi-sites / multi-ateliers.

### Wireframe (basse fidélité)

```text
+--------------------------------------------------------------------------------+
| KANBAN JAYDEE                                                      [Filtre]    |
+--------------------------------------------------------------------------------+
|  À FAIRE           |  EN COURS         |  À CONTRÔLER       |  TERMINÉ       |
|--------------------|--------------------|--------------------|----------------|
| [Carte #1 Rouge]   | [Carte #3 Bleu]    | [Carte #4 Orange]  | [Carte #5 Vert]|
| Nom: Préparer moule| Nom: Injection lot | Nom: Contrôle visuel| Nom: Expédié  |
|--------------------|--------------------|--------------------|----------------|
| [Carte #2 Violet]  |                    |                    |                |
| Nom: Matière ABS   |                    |                    |                |
+--------------------------------------------------------------------------------+
| [Ajouter une tâche]                                                         |
+--------------------------------------------------------------------------------+
```

---

## Exercice 2 — Initialiser le projet Node.js / React

### Commande utilisée pour créer le projet React (Vite)
```bash
npm create vite@latest frontend -- --template react
```

> Remarque: dans cet environnement, la récupération npm a été bloquée (`403 Forbidden`), donc la structure a été initialisée manuellement avec la même organisation attendue Vite + React.

### Arborescence finale

```text
Kanban-2/
├── README.md
├── FT_KANBAN_Reponses.md
├── backend/
│   ├── package.json
│   └── src/
│       └── server.js
└── frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        └── main.jsx
```

### `package.json` backend

```json
{
  "name": "kanban-backend",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "main": "src/server.js",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js",
    "test": "node --test"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
}
```

### `package.json` frontend

```json
{
  "name": "kanban-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0",
    "vitest": "^2.0.5"
  }
}
```
