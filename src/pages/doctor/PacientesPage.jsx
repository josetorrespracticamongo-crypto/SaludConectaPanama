import React, { useEffect, useState } from "react";
import { getPacientes, deletePaciente } from "../../services/pacientesService";
import PacientesList from "./pacientes/PacientesList";
import PacienteForm from "./pacientes/PacienteForm";

export default function PacientesPage() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const cargarPacientes = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar los pacientes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este paciente?")) return;
    try {
      await deletePaciente(id);
      cargarPacientes();
    } catch {
      alert("Error al eliminar");
    }
  };

  const handleEdit = (paciente) => {
    setSelectedPaciente(paciente);
    setShowForm(true);
  };

  const handleCreate = () => {
    setSelectedPaciente(null);
    setShowForm(true);
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pacientes</h2>

      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + Nuevo Paciente
      </button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <PacientesList
          pacientes={pacientes}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}

      {showForm && (
        <PacienteForm
          paciente={selectedPaciente}
          onClose={() => setShowForm(false)}
          onSaved={() => {
            setShowForm(false);
            cargarPacientes();
          }}
        />
      )}
    </div>
  );
}
