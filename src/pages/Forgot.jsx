import React from "react";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center p-6"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Logo */}
      <img
        src="/logo.svg"
        alt="logo"
        className="w-[32px] h-[32px] mb-6 cursor-pointer"
        onClick={() => navigate("/sobre")}
      />

      {/* Título */}
      <h1
        className="text-[#261f6c] text-2xl font-bold mb-4"
        style={{ fontFamily: "Comfortaa, sans-serif" }}
      >
        Redefinir senha
      </h1>

      {/* Texto explicativo */}
      <p className="text-[#136faf] text-base max-w-md leading-relaxed mb-6 font-roboto">
        Insira seu e-mail para receber um link de redefinição de senha.
      </p>

      {/* Campo de e-mail */}
      <input
        type="email"
        placeholder="Seu e-mail"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Botão Redefinir */}
      <button
        className="w-[343px] h-[52px] bg-[#261f6c] text-white font-black text-[13px] tracking-wider rounded-none uppercase mb-4"
      >
        Redefinir
      </button>

      {/* Link Voltar */}
      <p
        className="w-[343px] text-left text-[15px] font-roboto text-[#136fae] mt-2 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Voltar
      </p>
    </div>
  );
}
