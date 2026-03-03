'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const SESSION_KEY = 'hrmate_session';
const LAST_ACTIVITY_KEY = 'hrmate_last_activity';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 min idle timeout

const AuthContext = createContext({
    user: null,
    loading: true,
    setUser: () => { },
    logout: () => { },
    sessionExpired: false,
});

export const AuthProvider = ({ children }) => {
    const [user, setUserState] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionExpired, setSessionExpired] = useState(false);
    const timeoutRef = useRef(null);

    const clearSession = useCallback(() => {
        try { sessionStorage.removeItem(SESSION_KEY); } catch (_) { }
        try { sessionStorage.removeItem(LAST_ACTIVITY_KEY); } catch (_) { }
        setUserState(null);
    }, []);

    const handleTimeout = useCallback(() => {
        clearSession();
        setSessionExpired(true);
    }, [clearSession]);

    // Touch activity timestamp
    const touchActivity = useCallback(() => {
        try { sessionStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString()); } catch (_) { }
        setSessionExpired(false);

        // Reset the idle timer
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(handleTimeout, SESSION_TIMEOUT_MS);
    }, [handleTimeout]);

    // Check if session is stale on load
    useEffect(() => {
        try {
            const lastActivity = sessionStorage.getItem(LAST_ACTIVITY_KEY);
            if (lastActivity && Date.now() - parseInt(lastActivity) > SESSION_TIMEOUT_MS) {
                handleTimeout();
                return;
            }
        } catch (_) { }

        // Hydrate from sessionStorage
        try {
            const stored = sessionStorage.getItem(SESSION_KEY);
            if (stored) {
                setUserState(JSON.parse(stored));
                touchActivity();
            }
        } catch (_) { }
    }, []);

    // Listen to user activity for idle timeout
    useEffect(() => {
        if (!user) return;

        const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
        const handler = () => touchActivity();
        events.forEach(e => window.addEventListener(e, handler, { passive: true }));

        // Start the timer
        touchActivity();

        return () => {
            events.forEach(e => window.removeEventListener(e, handler));
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [user, touchActivity]);

    // Firebase Auth listener
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            if (u) {
                const serialized = {
                    uid: u.uid,
                    email: u.email,
                    displayName: u.displayName,
                    photoURL: u.photoURL,
                };
                try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(serialized)); } catch (_) { }
                setUserState(serialized);
                touchActivity();
            } else {
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

    const setUser = (u) => {
        if (u) {
            try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(u)); } catch (_) { }
            touchActivity();
        } else {
            clearSession();
        }
        setUserState(u);
    };

    const logout = () => {
        clearSession();
        setSessionExpired(false);
    };

    return (
        <AuthContext.Provider value={{ user, loading, setUser, logout, sessionExpired }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
