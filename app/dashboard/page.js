"use client"

import { fetchCurrentUserNotes } from '@/utils/notesApi';
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

    useEffect(() => {
        async function fetchNotes() {
            let data = await fetchCurrentUserNotes();
            console.log("currUser notes", data)
        }
        fetchNotes();
    }, []);

    return (
        <>
            <div className='w-[100vw] min-h-[100vh] h-auto flex flex-col md:flex-row pt-17'>
                <div className='w-full md:w-[30%] xl:w-[25%] bg-orange-100 p-3'>
                    <div className='flex items-center justify-center gap-8'>
                        <div className="relative h-20 w-20 md:w-25 md:h-25">
                            {
                                user?.profilePicture &&
                                <Image
                                    src={user.profilePicture}
                                    alt="Banner"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            }
                        </div>
                        <div>
                            <p className='text-[]18px'>
                                {user?.fullName}
                            </p>
                            <p>
                                {user?.email}
                            </p>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-[80%] xl:w-[75%] '>

                </div>
            </div>
        </>
    );
}

export default page;
