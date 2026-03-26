INSERT INTO colonne (id, intitule) VALUES (1, ‘A faire’);
INSERT INTO colonne (id, intitule) VALUES (2, ‘En cours’);
INSERT INTO colonne (id, intitule) VALUES (3, ‘A contrôler’);
INSERT INTO colonne (id, intitule) VALUES (4, ‘Terminé’);

INSERT INTO tache (id, nom, couleur, colonne_id) VALUES (1, ‘Préparer les matériaux’, ‘FF0000’, 1);
INSERT INTO tache (id, nom, couleur, colonne_id) VALUES (2, ‘Assembler les pièces’, ‘00FF00’, 2);
INSERT INTO tache (id, nom, couleur, colonne_id) VALUES (3, ‘Vérifier la qualité’, ‘0000FF’, 3);
INSERT INTO tache (id, nom, couleur, colonne_id) VALUES (4, ‘Emballer le produit’, ‘FFFF00’, 4);
INSERT INTO tache (id, nom, couleur, colonne_id) VALUES (5, ‘Livrer au client’, ‘FF00FF’, 2);