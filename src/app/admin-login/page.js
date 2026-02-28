'use client';

import LoginForm from '../../components/LoginForm';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLoginPage() {
    const { user, setUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) router.push('/');
    }, [user, router]);

    return <LoginForm onLoginSuccess={(u) => setUser(u)} userType="admin" />;
}
