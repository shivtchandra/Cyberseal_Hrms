import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AuthenticatedArea from './components/AuthenticatedArea';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#F9FAFB' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#111827',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '24px' }}>terminal</span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>HRM_SYS</div>
          <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`}</style>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Loading secure environment...</div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {!user ? (
          <>
            <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} userType="employee" />} />
            <Route path="/admin-login" element={<LoginForm onLoginSuccess={handleLoginSuccess} userType="admin" />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            {/* Authenticated Routes */}
            <Route path="/*" element={<AuthenticatedArea user={user} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
