import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Dashboard";
import Sobre from "./pages/Sobre";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}
