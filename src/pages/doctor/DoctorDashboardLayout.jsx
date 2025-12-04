import { Outlet, Link } from "react-router-dom";

export default function DoctorDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-6">Panel del Doctor</h2>

        <nav className="space-y-3">
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor">Inicio</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/pacientes">Pacientes</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/historial">Historial Clínico</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/recetas">Recetas</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/consultas">Consultas</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/traslados">Traslados</Link>
          <Link className="block p-2 rounded hover:bg-gray-200" to="/doctor/perfil">Perfil</Link>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-8">
        {/* TOPBAR */}
        <header className="bg-white p-4 shadow rounded mb-6">
          <h1 className="text-xl font-semibold">Panel del Doctor</h1>
        </header>

        {/* Aquí se muestran las páginas */}
        <Outlet />
      </main>

    </div>
  );
}
