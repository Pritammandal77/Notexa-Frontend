
import Header from '@/components/Header';
import React from 'react';

function UserLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default UserLayout;
