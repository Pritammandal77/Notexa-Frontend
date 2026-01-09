"use client"

import { createOrFetchWallet } from '@/utils/payoutApi';
import React, { useEffect } from 'react';

function page() {

    useEffect(() => {
        const getWallet = async () => {
            const res = await createOrFetchWallet()
            console.log(res.data.data)
        }

        getWallet();
    }, []);

    return (
        <>
            <div className='w-full min-h-screen h-auto'>

            </div>
        </>
    );
}

export default page;
