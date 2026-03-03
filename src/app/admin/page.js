'use client';

export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminAlias() {
    const router = useRouter();
    useEffect(() => {
        router.push('/admin-login');
    }, [router]);

    return null;
}
