import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const LoginForm = ({ isSigningUp, onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSigningUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      <form onSubmit={submit} style={{ width: 360, background: 'white', padding: 28, borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: 12 }}>{isSigningUp ? 'Create account' : 'Employee sign in'}</h2>
        <input style={{ width: '100%', padding: 10, marginBottom: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input style={{ width: '100%', padding: 10, marginBottom: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        <button style={{ width: '100%', padding: 12, background: '#ffd700', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }} disabled={loading}>{loading ? 'Please wait...' : (isSigningUp ? 'Sign up' : 'Sign in')}</button>
        <div style={{ marginTop: 12, textAlign: 'center', fontSize: 13 }}>
          {isSigningUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button type="button" onClick={onToggle} style={{ background: 'none', border: 'none', color: '#1e3a5f', cursor: 'pointer', textDecoration: 'underline' }}>{isSigningUp ? 'Sign in' : 'Create account'}</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;