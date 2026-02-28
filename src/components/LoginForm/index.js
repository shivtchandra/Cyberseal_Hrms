import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';


import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { styles } from '../../styles';
const ADMIN_CREDENTIALS = {
  email: 'admin@hrmate.com',
  password: 'adminPassword123'
};

const LoginForm = ({ onLoginSuccess, userType = 'employee' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      if (userType === 'admin') {
        onLoginSuccess({ email: email, uid: 'hardcoded-admin', isAdmin: true });
        setLoading(false);
        return;
      } else {
        alert("Admin accounts must use the designated admin portal (/admin-login).");
        setLoading(false);
        return;
      }
    }

    try {
      const authUser = await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(authUser.user);
    } catch (err) {
      try {
        const q = query(collection(db, 'employees'), where('email', '==', email), where('password', '==', password));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const empData = snapshot.docs[0].data();
          onLoginSuccess({ ...empData, uid: snapshot.docs[0].id });
        } else {
          alert("Invalid credentials or access denied.");
        }
      } catch (fError) {
        console.error(fError);
        alert("Authentication system failure.");
      }
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#F9FAFB',
    fontFamily: '"Inter", sans-serif',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#FFFFFF',
    padding: '48px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  };

  const footerStyle = {
    marginTop: '32px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#6B7280',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={submit} style={formStyle} className="animate-fade">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#111827',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '24px' }}>terminal</span>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>HRM_SYS Login</h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            {userType === 'admin' ? 'Administrator Authentication' : 'Secure Staff Gateway'}
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Email Address</label>
          <input
            style={styles.input}
            placeholder="name@company.com"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={labelStyle}>Secure Password</label>
          <input
            style={styles.input}
            placeholder="••••••••"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button style={{ ...styles.button.primary, width: '100%', justifyContent: 'center', padding: '12px' }} disabled={loading}>
          {loading ? 'Authenticating...' : 'Sign In To System'}
        </button>

        <div style={footerStyle}>
          Restricted access. Authorized personnel only.
        </div>
      </form>
    </div>
  );
};

export default LoginForm;