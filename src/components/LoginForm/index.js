import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';


import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { styles, tokens } from '../../styles';
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
    backgroundColor: tokens.colors.background,
    backgroundImage: 'radial-gradient(circle at 20% 20%, #CCFBF1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
    fontFamily: '"Funnel Display", sans-serif',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '440px',
    backgroundColor: tokens.colors.white,
    padding: '56px 48px',
    borderRadius: tokens.radius.xl,
    boxShadow: tokens.shadow.xl,
    border: `1px solid ${tokens.colors.border}`,
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '700',
    color: tokens.colors.primary,
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const footerStyle = {
    marginTop: '40px',
    textAlign: 'center',
    fontSize: '12px',
    color: tokens.colors.secondary,
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={submit} style={formStyle} className="animate-fade">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #065F46 100%)`,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 12px 24px -8px rgba(13, 148, 136, 0.4)'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '28px' }}>bolt</span>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>HRMate Login</h1>
          <p style={{ color: tokens.colors.secondary, fontSize: '15px' }}>
            {userType === 'admin' ? 'Administrative Gateway' : 'Global Workforce Entry'}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Corporate Email</label>
          <input
            style={styles.input}
            placeholder="name@hrmate.com"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <label style={labelStyle}>Secure Passcode</label>
          <input
            style={styles.input}
            placeholder="••••••••"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button style={{ ...styles.button.primary, width: '100%', height: '48px', fontSize: '15px' }} disabled={loading}>
          {loading ? 'Authenticating...' : 'Establish Connection'}
        </button>

        <div style={{ ...footerStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
          Restricted access. Authorized personnel only.
        </div>
      </form>
    </div>
  );
};

export default LoginForm;