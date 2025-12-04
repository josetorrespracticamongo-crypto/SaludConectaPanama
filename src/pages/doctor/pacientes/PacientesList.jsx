export default function PacientesList({ pacientes, onDelete, onEdit }) {
  return (
    <table className="w-full bg-white shadow rounded">
    <thead>
  <tr className="bg-gray-200">
    <th className="p-2">Nombre</th>
    <th className="p-2">Edad</th>
    <th className="p-2">Cédula</th>
    <th className="p-2">Teléfono</th>
    <th className="p-2">Acciones</th>
  </tr>
</thead>

<tbody>
  {pacientes.map((p) => (
    <tr key={p._id} className="border-b">
      <td className="p-2">{p.nombre}</td>
      <td className="p-2">{p.edad}</td>
      <td className="p-2">{p.cedula}</td>
      <td className="p-2">{p.telefono}</td>

            <td className="p-2 space-x-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => onEdit(p)}
              >
                Editar
              </button>

              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => onDelete(p._id)}
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
