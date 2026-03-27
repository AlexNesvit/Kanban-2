import { useEffect, useMemo, useState } from "react";

const DEFAULT_COLUMNS = ["A faire", "En cours", "A controler", "Termine"];
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function KanbanBoard() {
  const [taches, setTaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTaches = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/taches`);
        if (!response.ok) {
          throw new Error("Impossible de charger les taches");
        }
        const data = await response.json();
        setTaches(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTaches();
  }, []);

  const tachesByColumn = useMemo(() => {
    return DEFAULT_COLUMNS.reduce((acc, columnName) => {
      acc[columnName] = taches.filter(
        (tache) => tache.colonne?.intitule === columnName
      );
      return acc;
    }, {});
  }, [taches]);

  if (loading) {
    return <p>Chargement des taches...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <section className="row g-3">
      {DEFAULT_COLUMNS.map((columnName) => (
        <article className="col-12 col-md-6 col-lg-3" key={columnName}>
          <div className="card h-100">
            <div className="card-header fw-semibold">{columnName}</div>
            <ul className="list-group list-group-flush">
              {tachesByColumn[columnName].length === 0 && (
                <li className="list-group-item text-muted">Aucune tache</li>
              )}
              {tachesByColumn[columnName].map((tache) => (
                <li className="list-group-item" key={tache.id}>
                  <div className="fw-semibold">{tache.nom}</div>
                  <small className="text-muted">#{tache.couleur}</small>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
