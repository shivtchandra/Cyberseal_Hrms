import React, { useState, useEffect } from 'react';
// Firebase auth
import { auth } from './firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// shared styles and components
import { globalStyles, styles } from './styles';
import LoginForm from './components/LoginForm';
import AuthenticatedArea from './components/AuthenticatedArea';
import AdminPanel from './components/AdminPanel';

// ---------- Main Component ----------
function App() {
  const [user, setUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [activeTab, setActiveTab] = useState('employees');
  const [searchTerm, setSearchTerm] = useState('');

  // admin emails list
  const adminEmails = ['admin@example.com'];
  const isAdmin = user ? adminEmails.includes(user.email) : false;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <div style={styles.app}>
        {/* show login when not authenticated */}
        {!user && (
          <div style={{ flex: 1 }}>
            <LoginForm isSigningUp={isSigningUp} onToggle={() => setIsSigningUp((s) => !s)} />
          </div>
        )}

        {user && (
          <BrowserRouter>
            <Routes>
              <Route
                path="/admin"
                element={isAdmin ? <AdminPanel /> : <Navigate to="/" replace />}
              />
              {/* fall back to the normal authenticated UI for any other path */}
              <Route path="/*" element={<AuthenticatedArea user={user} />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
