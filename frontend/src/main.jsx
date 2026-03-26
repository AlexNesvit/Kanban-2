import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="container py-4">
      <h1 className="mb-3">Kanban</h1>
      <p className="text-muted">Initialisation frontend React + Bootstrap OK.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
