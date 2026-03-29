import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Estos componentes los crearemos en el siguiente paso
const Login = () => <div className="p-10"><h2>Pantalla de Login (Próximamente)</h2></div>;
const Dashboard = () => <div className="p-10"><h2>Panel de la Gasolinera (Próximamente)</h2></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Si entran a la raíz, los mandamos al login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;