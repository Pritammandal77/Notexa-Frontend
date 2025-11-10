"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function page() {

    const user = useSelector((state) => state.user?.currUser?.user)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        console.log("user data on dashboard", user)
        setUserData(user);
    }, [user]);


    return (
        <>
            <div className='w-[100vw] min-h-[100vh] h-auto flex flex-col md:flex-row pt-17'>
                <div className='w-full md:w-[20%] xl:w-[25%] bg-green-100'>
                    <div className="relative w-30 h-30">
                        {
                            user?.profilePicture &&
                            <Image
                                src={user.profilePicture}
                                alt="Banner"
                                fill
                                className="object-cover rounded-xl"
                            />
                        }
                    </div>

                </div>
                <div className='w-full md:w-[80%] xl:w-[75%] bg-blue-200'>

                </div>
            </div>
        </>
    );
}

export default page;
