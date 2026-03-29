import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login"; // Importamos el nuevo componente
import Dashboard from "./components/Dashboard";
import Bitacora from "./components/Bitacora"; //Importando nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* El Dashboard lo haremos después */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/bitacora" element={<Bitacora />} />
      </Routes>
    </Router>
  );
}

export default App;
