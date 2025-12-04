import { useEffect, useState } from "react";
import {
  getHistoriales,
  deleteHistorial
} from "../../services/historialService.js";

import HistoriasList from "./historial/HistoriasList.jsx";
import HistoriaForm from "./historial/HistoriaForm.jsx";


export default function HistorialPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const cargar = async () => {
    try {
      const data = await getHistoriales();
      setItems(data);
    } catch {
      alert("Error al cargar historiales");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar?")) return;
    try {
      await deleteHistorial(id);
      cargar();
    } catch {
      alert("Error al eliminar");
    }
  };

  const handleCreate = () => {
    setSelected(null);
    setShowForm(true);
  };

  const handleEdit = (h) => {
    setSelected(h);
    setShowForm(true);
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Historial Clínico</h2>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={handleCreate}
      >
        + Nuevo Registro
      </button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <HistoriasList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {showForm && (
        <HistoriaForm
          item={selected}
          onClose={() => setShowForm(false)}
          onSaved={() => {
            setShowForm(false);
            cargar();
          }}
        />
      )}
    </div>
  );
}
