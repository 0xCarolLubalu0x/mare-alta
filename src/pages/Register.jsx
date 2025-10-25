export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-2xl font-semibold text-blue-700 mb-6">Register</h1>

      <div className="w-full max-w-xs">
        <select className="w-full border-2 border-indigo-900 px-3 py-2 rounded mb-4">
          <option>Select your group</option>
        </select>

        <input
          type="text"
          placeholder="Username"
          className="w-full border-2 border-indigo-900 px-3 py-2 rounded mb-4 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full border-2 border-indigo-900 px-3 py-2 rounded mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Create password"
          className="w-full border-2 border-indigo-900 px-3 py-2 rounded mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border-2 border-indigo-900 px-3 py-2 rounded mb-4 focus:outline-none"
        />

        <button className="w-full bg-indigo-900 text-white font-semibold py-2 rounded hover:bg-indigo-800">
          NEXT
        </button>
      </div>
    </div>
  );
}
