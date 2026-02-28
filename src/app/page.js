'use client';

import React from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import AdminArea from '../components/AdminArea';
import EmployeeArea from '../components/EmployeeArea';

const ADMIN_EMAILS = ['admin@hrmate.com'];

export default function Home() {
    const { user, loading, setUser } = useAuth();

    if (loading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#F9FAFB' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '48px', height: '48px', background: '#111827', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 16px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}>
                        <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '24px' }}>terminal</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>HRMate</div>
                    <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`}</style>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Loading secure environment...</div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <LoginForm onLoginSuccess={(u) => setUser(u)} />;
    }

    const isAdmin = ADMIN_EMAILS.includes(user.email) || user.isAdmin;
    return isAdmin ? <AdminArea user={user} /> : <EmployeeArea user={user} />;
}
