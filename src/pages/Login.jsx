import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Logo */}
      <img
        src="/logo.svg"
        alt="logo"
        className="w-[32px] h-[32px] mb-8 cursor-pointer"
        onClick={() => navigate("/sobre")}
      />

      {/* Título */}
      <h1
        className="text-[20px] leading-[22px] text-[#136faf] font-[400] mb-[57px]"
        style={{ fontFamily: "Comfortaa, sans-serif" }}
      >
        Boas Vindas
      </h1>

      {/* Campo User */}
      <input
        type="text"
        placeholder="Usuário"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Password */}
      <input
        type="password"
        placeholder="Senha"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Botão Entrar */}
      <button
        className="w-[343px] h-[52px] bg-[#261f6c] text-white font-black text-[13px] tracking-wider rounded-none uppercase font-roboto"
        onClick={() => navigate("/dashboard")}
      >
        Entrar
      </button>

      {/* Esqueceu a senha */}
      <p
        className="w-[343px] text-left text-[15px] font-roboto text-[#136fae] mt-2 cursor-pointer"
        onClick={() => navigate("/forgot")}
      >
        Esqueceu a senha?
      </p>

      {/* Botão Registre-se */}
      <button
        className="w-[343px] h-[52px] border border-[#26206c] bg-white text-[#26206c] font-roboto uppercase mt-[95px] rounded-none"
        onClick={() => navigate("/register")}
      >
        Registre-se
      </button>
    </div>
  );
}
