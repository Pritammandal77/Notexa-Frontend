import About from '@/components/home/About';
import Working from '@/components/home/Working';
import React from 'react';

function page() {
    return (
        <>
            <div className='w-full h-auto mt-17'>
                <About />
                <Working />
            </div>
        </>
    );
}

export default page;
