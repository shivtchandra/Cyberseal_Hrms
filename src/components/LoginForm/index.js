import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { styles, tokens } from '../../styles';

const ADMIN_CREDENTIALS = {
  email: 'admin@hrmate.com',
  password: 'adminPassword123'
};

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 min lockout

/* Password Complexity Rules (ISO 27001 aligned) */
export const validatePassword = (pw) => {
  const rules = [
    { test: pw.length >= 8, label: 'At least 8 characters' },
    { test: /[A-Z]/.test(pw), label: 'One uppercase letter' },
    { test: /[a-z]/.test(pw), label: 'One lowercase letter' },
    { test: /[0-9]/.test(pw), label: 'One number' },
    { test: /[^A-Za-z0-9]/.test(pw), label: 'One special character' },
  ];
  return { rules, isValid: rules.every(r => r.test) };
};

const LoginForm = ({ onLoginSuccess, userType = 'employee' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockUntil, setLockUntil] = useState(0);
  const [lockRemaining, setLockRemaining] = useState(0);

  // Hydrate lockout state
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('login_lockout');
      if (stored) {
        const { until, count } = JSON.parse(stored);
        if (Date.now() < until) { setLockUntil(until); setAttempts(count); }
        else sessionStorage.removeItem('login_lockout');
      }
    } catch (_) { }
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!lockUntil || Date.now() >= lockUntil) { setLockRemaining(0); return; }
    const interval = setInterval(() => {
      const remaining = Math.max(0, lockUntil - Date.now());
      setLockRemaining(remaining);
      if (remaining <= 0) { clearInterval(interval); setLockUntil(0); setAttempts(0); sessionStorage.removeItem('login_lockout'); }
    }, 1000);
    return () => clearInterval(interval);
  }, [lockUntil]);

  const recordFailedAttempt = () => {
    const newCount = attempts + 1;
    setAttempts(newCount);
    if (newCount >= MAX_ATTEMPTS) {
      const until = Date.now() + LOCKOUT_DURATION_MS;
      setLockUntil(until);
      sessionStorage.setItem('login_lockout', JSON.stringify({ until, count: newCount }));
      setError(`Too many failed attempts. Locked for 15 minutes.`);
      // Log the lockout
      try { addDoc(collection(db, 'auditLog'), { action: 'LOGIN_LOCKOUT', details: { email }, timestamp: new Date().toISOString(), performedBy: 'system' }); } catch (_) { }
    } else {
      setError(`Invalid credentials. ${MAX_ATTEMPTS - newCount} attempts remaining.`);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (lockUntil && Date.now() < lockUntil) {
      setError('Account temporarily locked. Please wait.');
      return;
    }

    setLoading(true);

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      if (userType === 'admin') {
        setAttempts(0);
        try { sessionStorage.removeItem('login_lockout'); } catch (_) { }
        try { addDoc(collection(db, 'auditLog'), { action: 'ADMIN_LOGIN', details: { email }, timestamp: new Date().toISOString(), performedBy: email }); } catch (_) { }
        onLoginSuccess({ email, uid: 'hardcoded-admin', isAdmin: true });
        setLoading(false);
        return;
      } else {
        setError("Admin accounts must use the admin portal (/admin-login).");
        setLoading(false);
        return;
      }
    }

    try {
      const authUser = await signInWithEmailAndPassword(auth, email, password);
      setAttempts(0);
      try { sessionStorage.removeItem('login_lockout'); } catch (_) { }
      onLoginSuccess(authUser.user);
    } catch (err) {
      try {
        const q = query(collection(db, 'employees'), where('email', '==', email), where('password', '==', password));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const empData = snapshot.docs[0].data();
          setAttempts(0);
          try { sessionStorage.removeItem('login_lockout'); } catch (_) { }
          onLoginSuccess({ ...empData, uid: snapshot.docs[0].id });
        } else {
          recordFailedAttempt();
        }
      } catch (fError) {
        console.error(fError);
        setError("Authentication system failure.");
      }
    } finally {
      setLoading(false);
    }
  };

  const isLocked = !!lockUntil && Date.now() < lockUntil;
  const lockMins = Math.ceil(lockRemaining / 60000);
  const lockSecs = Math.floor((lockRemaining % 60000) / 1000);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',
      backgroundColor: tokens.colors.background,
      backgroundImage: 'radial-gradient(circle at 20% 20%, #CCFBF1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
      fontFamily: '"Funnel Display", sans-serif',
    }}>
      <form onSubmit={submit} style={{
        width: '100%', maxWidth: '440px', backgroundColor: tokens.colors.white,
        padding: '56px 48px', borderRadius: tokens.radius.xl, boxShadow: tokens.shadow.xl,
        border: `1px solid ${tokens.colors.border}`,
      }} className="animate-fade">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '56px', height: '56px',
            background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #065F46 100%)`,
            borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', boxShadow: '0 12px 24px -8px rgba(13, 148, 136, 0.4)'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '28px' }}>bolt</span>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>Cyberseal HRMS</h1>
          <p style={{ color: tokens.colors.secondary, fontSize: '15px' }}>
            {userType === 'admin' ? 'Administrative Gateway' : 'Global Workforce Entry'}
          </p>
        </div>

        {error && (
          <div style={{
            padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px', fontWeight: '600',
            background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span>
            {error}
          </div>
        )}

        {isLocked && (
          <div style={{
            padding: '16px', borderRadius: '12px', marginBottom: '20px', textAlign: 'center',
            background: '#FEF3C7', border: '1px solid #FDE68A',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#D97706', display: 'block', marginBottom: '8px' }}>lock_clock</span>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#92400E' }}>Account Locked</div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#D97706', fontFamily: 'monospace', margin: '8px 0' }}>
              {String(lockMins).padStart(2, '0')}:{String(lockSecs).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '12px', color: '#92400E' }}>Too many failed attempts</div>
          </div>
        )}

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Corporate Email</label>
          <input style={styles.input} placeholder="name@cyberseal.com" type="email" required value={email} onChange={e => setEmail(e.target.value)} disabled={isLocked} />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Secure Passcode</label>
          <input style={styles.input} placeholder="••••••••" type="password" required value={password} onChange={e => setPassword(e.target.value)} disabled={isLocked} />
        </div>

        <button style={{ ...styles.button.primary, width: '100%', height: '48px', fontSize: '15px', opacity: isLocked ? 0.5 : 1 }} disabled={loading || isLocked}>
          {loading ? 'Authenticating...' : isLocked ? 'Locked' : 'Establish Connection'}
        </button>

        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '12px', color: tokens.colors.secondary, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
          Restricted access. Authorized personnel only.
        </div>
      </form>
    </div>
  );
};

export default LoginForm;