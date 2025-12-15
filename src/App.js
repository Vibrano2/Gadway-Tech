import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SqueezePage from './pages/SqueezePage';
import SalesPage from './pages/SalesPage';
import ThankYouPage from './pages/ThankYouPage';
import DeliveryPage from './pages/DeliveryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SqueezePage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

