"use client"

import { createOrFetchWallet } from '@/utils/payoutApi';
import React, { useEffect, useState } from 'react';

function page() {

    const [walletData , setWalletData] = useState(null);

    useEffect(() => {
        const getWallet = async () => {
            const res = await createOrFetchWallet()
            console.log(res.data.data)
            setWalletData(res.data.data)
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
