import { useState } from "react";
import { createHistorial, updateHistorial } from "../../../services/historialService";

export default function HistoriaForm({ item, onClose, onSaved }) {
  const [form, setForm] = useState({
    pacienteCedula: item?.pacienteCedula || "",
    pacienteNombre: item?.pacienteNombre || "",
    diagnostico: item?.diagnostico || "",
    tratamiento: item?.tratamiento || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (item) {
        await updateHistorial(item._id, form);
      } else {
        await createHistorial(form);
      }

      onSaved();
    } catch {
      alert("Error al guardar historial");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-bold mb-4">
          {item ? "Editar Historial" : "Nuevo Historial"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="pacienteCedula"
            placeholder="Cédula del paciente"
            value={form.pacienteCedula}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="pacienteNombre"
            placeholder="Nombre del paciente"
            value={form.pacienteNombre}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="diagnostico"
            placeholder="Diagnóstico"
            value={form.diagnostico}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="tratamiento"
            placeholder="Tratamiento"
            value={form.tratamiento}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancelar
            </button>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
