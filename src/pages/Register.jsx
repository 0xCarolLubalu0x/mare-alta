import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
        onClick={() => navigate("/")}
      />

      {/* Título */}
      <h1
        className="text-[20px] leading-[22px] text-[#136faf] font-[400] mb-[57px]"
        style={{ fontFamily: "Comfortaa, sans-serif" }}
      >
        Criar Conta
      </h1>

      {/* Campo Nome */}
      <input
        type="text"
        placeholder="Nome completo"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Email */}
      <input
        type="email"
        placeholder="E-mail"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Usuário */}
      <input
        type="text"
        placeholder="Usuário"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Senha */}
      <input
        type="password"
        placeholder="Senha"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Confirmar Senha */}
      <input
        type="password"
        placeholder="Confirmar senha"
        className="w-[343px] h-[52px] p-3 mb-[24px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Botão Registrar */}
      <button
        className="w-[343px] h-[52px] bg-[#261f6c] text-white font-black text-[13px] tracking-wider rounded-none uppercase font-roboto"
        onClick={() => navigate("/dashboard")}
      >
        Registrar
      </button>

      {/* Voltar para Login */}
      <p
        className="w-[343px] text-left text-[15px] font-roboto text-[#136fae] mt-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Já tem conta? Entrar
      </p>
    </div>
  );
}
