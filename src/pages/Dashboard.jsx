import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#0B1652]">Dashboard (placeholder)</h1>
        <p className="mt-4 text-[#136faf]">Aqui virá o conteúdo do app.</p>
        <button className="mt-6 px-4 py-2 border" onClick={() => navigate("/")}>Sair</button>
      </div>
    </div>
  );
}
