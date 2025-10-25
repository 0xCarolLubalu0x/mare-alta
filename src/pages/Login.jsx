export default function Login() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Logo */}
<img src="/logo.svg" alt="logo" className="w-[128px] h-[128px] mb-[33px]" />

      {/* Título */}
      <h1
        className="text-[20px] leading-[22px] text-[#136faf] font-[400] mb-[57px]"
        style={{ fontFamily: 'Comfortaa, sans-serif' }}
      >
        Boas Vindas
      </h1>

      {/* Campo User */}
      <input
        type="text"
        placeholder="User"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Campo Password */}
      <input
        type="password"
        placeholder="Password"
        className="w-[343px] h-[52px] p-3 mb-[16px] border border-[#26206c] rounded-none text-[#136fae] font-roboto placeholder-[#136fae]"
      />

      {/* Botão NEXT */}
      <button className="w-[343px] h-[52px] bg-[#261f6c] text-white font-black text-[13px] tracking-wider rounded-none uppercase">
        NEXT
      </button>

      {/* Texto Forgot Password */}
      <p
        className="w-[343px] text-left text-[15px] font-roboto text-[#136fae] mt-2 cursor-pointer"
      >
        Forgot password
      </p>

      {/* Botão SIGN UP */}
      <button className="w-[343px] h-[52px] border border-[#26206c] text-[#26206c] font-roboto uppercase mt-[95px] rounded-none">
        SIGN UP
      </button>
    </div>
  );
}
