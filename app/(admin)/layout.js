

import Header from '@/components/Header';
import React from 'react';

function AdminLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default AdminLayout;
