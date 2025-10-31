import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sobre() {
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
        onClick={() => navigate("/")}
      />

      {/* Título */}
      <h1
        className="text-[#261f6c] text-2xl font-bold mb-4"
        style={{ fontFamily: "Comfortaa, sans-serif" }}
      >
        Sobre o Maré Alta
      </h1>

      {/* Texto descritivo */}
      <div className="text-[#136faf] text-base max-w-md leading-relaxed space-y-4 mb-8">
        <p>
          O <strong>Maré Alta</strong> é um aplicativo que une tecnologia
          blockchain e reconhecimento digital comunitário para fortalecer
          iniciativas locais.
        </p>

        <p>
          A plataforma funciona como um sistema de{" "}
          <strong>ações e presenças verificadas</strong>, registradas de forma
          transparente e imutável na blockchain da{" "}
          <strong>Solana</strong>.
        </p>

        <p>
          Cada participação — seja em mutirões, oficinas ou eventos — gera um{" "}
          <strong>registro digital único</strong>, que comprova a contribuição
          real das pessoas e dos coletivos. Esses registros podem se transformar
          em <strong>tokens de reconhecimento</strong>, permitindo que
          comunidades construam um histórico de impacto social, valorizando quem
          faz a diferença no território.
        </p>

        <p>
          Mais do que um app, o <strong>Maré Alta</strong> é uma ferramenta para
          dar <strong>visibilidade e confiança</strong> às ações comunitárias,
          sem depender de intermediários.
        </p>

        <p>
          <strong>
            Tecnologia aberta, dados no controle das pessoas — e cada maré
            representando um novo ciclo de colaboração e pertencimento.
          </strong>
        </p>
      </div>

      {/* Link Voltar */}
      <p
        onClick={() => navigate("/login")}
        className="text-[#136fae] text-[15px] font-roboto cursor-pointer hover:underline"
      >
        Voltar
      </p>
    </div>
  );
}
