import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Import your page components

import Login from './pages/auth/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Login />} />
          <Route path="/departments" element={<Login />} />
          <Route path="/designations" element={<Login />} />
          <Route path="/attendance" element={<Login />} />
          <Route path="/leave" element={<Login />} />
          <Route path="/salary" element={<Login />} />
          <Route path="/deductions" element={<Login />} />
          <Route path="/openings" element={<Login />} />
          <Route path="/candidates" element={<Login />} />
          <Route path="/reports" element={<Login />} />
          <Route path="/settings" element={<Login />} />
          <Route path="/profile" element={<Login />} />
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;