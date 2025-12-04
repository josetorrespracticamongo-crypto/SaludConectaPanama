export default function HistoriasList({ items, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Paciente</th>
          <th className="p-2">Diagnóstico</th>
          <th className="p-2">Fecha</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {items.map((h) => (
          <tr key={h._id} className="border-b">
            <td className="p-2">{h.pacienteNombre}</td>
            <td className="p-2">{h.diagnostico}</td>
            <td className="p-2">{new Date(h.fecha).toLocaleDateString()}</td>

            <td className="p-2 space-x-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => onEdit(h)}
              >
                Editar
              </button>

              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => onDelete(h._id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
