
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
