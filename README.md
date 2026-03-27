# FT Alex - Etude de cas KANBAN (Reponses 1 a 9)

## Contexte
Ce projet implemente un mini Kanban fullstack:
- `backend` en Node.js + Express
- `frontend` en React + Vite
- tests backend (Node test + Supertest)
- tests frontend (Vitest + Testing Library)

## Exercice 1 - Hypothese MVP
### Hypothese
Si l'atelier visualise ses ordres de fabrication sur un tableau Kanban unique (colonnes + cartes), alors les equipes priorisent plus vite et reduisent les retards.

### Cible
- Responsable production
- Chef d'equipe atelier
- Operateur suivi de fabrication

### Proposition de valeur
Une interface visuelle simple qui montre instantanement:
- l'etat des taches
- la priorite
- les blocages par colonne

### Inclus dans le MVP
1. Tableau Kanban 4 colonnes
2. Affichage des taches (nom + couleur)
3. API lecture des taches
4. API ajout de tache
5. Tests backend/frontend

### Exclu du MVP
1. Authentification
2. Drag and drop avance
3. Notifications
4. Reporting KPI
5. Historique complet

## Exercice 2 - Initialisation du projet Node.js / React
### Ce qui a ete cree
1. Projet fullstack avec dossiers separes `backend` et `frontend`
2. Frontend React (Vite)
3. Backend Express
4. Scripts npm de demarrage et de test

### Structure finale
```text
Kanban 2/
├── README.md
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── sql/
│   │   ├── 01_create_table.sql
│   │   └── 02_insert_colonne_tache.sql
│   ├── src/
│   │   ├── data/store.js
│   │   ├── models/
│   │   │   ├── Colonne.js
│   │   │   └── Tache.js
│   │   ├── repositories/
│   │   │   ├── colonneRepository.js
│   │   │   └── tacheRepository.js
│   │   ├── routes/tacheRoutes.js
│   │   └── server.js
│   └── tests/tache.test.js
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── App.test.jsx
        ├── main.jsx
        └── components/KanbanBoard.jsx
```

## Exercice 3 - Modeles metier
### Ce qui a ete cree
1. Modele `Colonne` avec `id` et `intitule`
2. Modele `Tache` avec `id`, `nom`, `couleur`, `colonne`
3. Validation metier dans `Tache`:
- `nom` obligatoire
- `couleur` format hex RGB sans `#`

### Fichiers
- `backend/src/models/Colonne.js`
- `backend/src/models/Tache.js`

## Exercice 4 - Script SQL de creation
### Ce qui a ete cree
1. Table `colonne`
2. Table `tache`
3. Cle etrangere `tache.colonne_id -> colonne.id`

### Fichier
- `backend/sql/01_create_table.sql`

## Exercice 5 - Script SQL d'initialisation des donnees
### Ce qui a ete cree
1. Insertion des colonnes Kanban
2. Insertion de taches de demonstration

### Fichier
- `backend/sql/02_insert_colonne_tache.sql`

## Exercice 6 - Repository pattern
### Ce qui a ete cree
1. `colonneRepository` (findAll, findById, save)
2. `tacheRepository` (findAll, save, findColonneByName)
3. Source de donnees centralisee en memoire: `src/data/store.js`

### Fichiers
- `backend/src/repositories/colonneRepository.js`
- `backend/src/repositories/tacheRepository.js`
- `backend/src/data/store.js`

## Exercice 7 - Mise en place du serveur backend
### Ce qui a ete cree
1. Application Express avec `cors` et `express.json()`
2. Route de sante `GET /health`
3. Separation `app` / `listen`:
- `src/server.js` exporte l'app
- `index.js` lance le serveur

### Fichiers
- `backend/src/server.js`
- `backend/index.js`

## Exercice 8 - Page d'accueil + GET /api/taches + tests
### Backend
Route `GET /api/taches` qui retourne la liste JSON des taches avec leur colonne.

### Frontend
La route `/` affiche le tableau Kanban:
1. Chargement des donnees via `fetch("http://localhost:3000/api/taches")`
2. Affichage des 4 colonnes
3. Affichage des cartes de taches dans la bonne colonne

### Tests
1. Test backend: verification de `GET /api/taches` (status 200 + tableau JSON)
2. Test frontend: verification affichage colonnes/taches apres chargement

### Fichiers
- `backend/src/routes/tacheRoutes.js`
- `backend/tests/tache.test.js`
- `frontend/src/components/KanbanBoard.jsx`
- `frontend/src/App.jsx`
- `frontend/src/main.jsx`
- `frontend/src/App.test.jsx`

## Exercice 9 - POST /api/taches + tests
### Regle metier demandee
1. Creation de tache via `POST /api/taches`
2. Affectation automatique a la colonne `A Faire`
3. Si `A Faire` absente: retour `400`
4. Retour JSON de la tache creee

### Ce qui a ete implemente
1. Route `POST /api/taches` dans `tacheRoutes`
2. Recherche de colonne via `findColonneByName("A Faire")`
3. Erreur `400` + message explicite si colonne absente
4. Test de succes `201`
5. Test d'erreur `400` si la colonne `A Faire` est retiree

### Fichiers
- `backend/src/routes/tacheRoutes.js`
- `backend/src/repositories/tacheRepository.js`
- `backend/src/data/store.js`
- `backend/tests/tache.test.js`

## Lancement du projet
### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Lancement des tests
### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test -- --run
```

## Resultat actuel
- Backend: tests OK (GET + POST succes + POST erreur 400)
- Frontend: test page `/` OK (chargement et rendu Kanban)

## Captures ecran conseillees pour la remise
1. Terminal backend avec `npm test` (tests passes)
2. Terminal frontend avec `npm test -- --run` (test passe)
3. Navigateur sur `http://localhost:5173` montrant le tableau Kanban
4. Capture code de `POST /api/taches` et du test associe
