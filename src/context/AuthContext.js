'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const SESSION_KEY = 'hrmate_session';

const AuthContext = createContext({
    user: null,
    loading: true,
    setUser: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }) => {
    const [user, setUserState] = useState(null);
    const [loading, setLoading] = useState(true);

    // Hydrate from sessionStorage immediately (before Firebase resolves)
    useEffect(() => {
        try {
            const stored = sessionStorage.getItem(SESSION_KEY);
            if (stored) {
                setUserState(JSON.parse(stored));
            }
        } catch (_) { }
    }, []);

    // Firebase Auth listener (handles real Firebase users)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            if (u) {
                // Firebase user — save to session
                const serialized = {
                    uid: u.uid,
                    email: u.email,
                    displayName: u.displayName,
                    photoURL: u.photoURL,
                };
                try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(serialized)); } catch (_) { }
                setUserState(serialized);
            } else {
                // Only clear state if we have no session-stored user
                // (prevents clearing hardcoded admin on Firebase returning null)
                try {
                    const stored = sessionStorage.getItem(SESSION_KEY);
                    if (!stored) setUserState(null);
                } catch (_) {
                    setUserState(null);
                }
            }
            setLoading(false);
        });
        return unsub;
    }, []);

    // Used both for hardcoded admin and Firestore employee login
    const setUser = (u) => {
        if (u) {
            try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(u)); } catch (_) { }
        } else {
            try { sessionStorage.removeItem(SESSION_KEY); } catch (_) { }
        }
        setUserState(u);
    };

    const logout = () => {
        try { sessionStorage.removeItem(SESSION_KEY); } catch (_) { }
        setUserState(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
