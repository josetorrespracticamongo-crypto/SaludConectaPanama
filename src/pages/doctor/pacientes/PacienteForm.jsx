import React, { useState } from "react";
import {
  createPaciente,
  updatePaciente,
} from "../../../services/pacientesService";

export default function PacienteForm({ paciente, onClose, onSaved }) {
  const [form, setForm] = useState({
    nombre: paciente?.nombre || "",
    edad: paciente?.edad || "",
    cedula: paciente?.cedula || "",
    telefono: paciente?.telefono || "",
    direccion: paciente?.direccion || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (paciente) {
        await updatePaciente(paciente._id, form);
      } else {
        await createPaciente(form);
      }

      onSaved();
    } catch {
      alert("Error al guardar");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-bold mb-4">
          {paciente ? "Editar Paciente" : "Nuevo Paciente"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="edad"
            placeholder="Edad"
            value={form.edad}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="cedula"
            placeholder="Cédula"
            value={form.cedula}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="direccion"
            placeholder="Dirección"
            value={form.direccion}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
