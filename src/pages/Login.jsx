import { useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", { email, password });
      login(data.user, data.token);
    } catch (err) {
      setError("Credenciales incorrectas");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundImage: "url('/img/fondo_salud.jpg')",   // <-- Cambia tu imagen aquí
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl max-w-md w-full p-10 animate-fadeInUp">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/img/logo.png" // <-- AQUÍ TU LOGO
            alt="Logo"
            className="w-20 h-20 mx-auto drop-shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            Sistema Médico Centralizado
          </h1>
          <h2 className="text-gray-500 text-sm">Salud Conecta Panamá</h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-1">
              Correo
            </label>
            <input
              type="email"
              className="w-full p-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="bg-red-100 border border-red-300 text-red-600 p-2 rounded text-center mb-4">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl transition active:scale-[.98] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                Iniciando sesión...
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </span>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Salud Conecta Panamá
        </p>
      </div>
    </div>
  );
}
