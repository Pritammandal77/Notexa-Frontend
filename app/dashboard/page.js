"use client"

import Loader1 from '@/components/Loader/Loader';
import { fetchCurrentUserNotes } from '@/utils/notesApi';
import Link from "next/link";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function page() {

    const user = useSelector((state) => state.user?.currUser?.user)
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currUserNotes, setCurrUserNotes] = useState(null)

    useEffect(() => {
        console.log("user data on dashboard", user)
        setUserData(user);
    }, [user]);

    useEffect(() => {
        async function fetchNotes() {
            setIsLoading(true);
            let data = await fetchCurrentUserNotes();
            console.log("currUser notes", data)
            setCurrUserNotes(data.data)
            setIsLoading(false)
        }
        fetchNotes();
    }, []);

    return (
        <>
            <div className='w-[100vw] min-h-[100vh] h-auto flex flex-col md:flex-row pt-17 '>
                <div className='w-full md:w-[30%] xl:w-[25%] h-[100vh] bg-orange-100 p-3 fixed top-0 pt-20'>
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

                <div className='w-full md:w-[80%] xl:w-[75%] h-auto absolute top-0 right-0 pt-20'>

                    <div className='p-4 text-3xl'>
                        <h1>Notes</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full px-7'>
                        {
                            currUserNotes &&
                            currUserNotes.map((data, index) => (
                                <div
                                    key={data._id}
                                    className="w-[95%] xl:w-[90%] h-auto xl:h-[60vh] bg-orange-50 flex flex-1 flex-col items-center justify-center relative border-1 border-orange-100 text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl p-4 duration-300 ease-in-out mx-[4vmin] cursor-pointer"
                                >
                                    <div
                                        className="absolute top-0 left-0 p-3 w-full h-auto xl:h-full  rounded-[10%] overflow-hidden transition-all duration-150 ease-out"
                                    >

                                        <div className="w-full h-40 xl:h-[50%] overflow-hidden rounded-xl">
                                            <Image
                                                src={data?.notesSample1}
                                                alt={data.title || "note image"}
                                                width={500}
                                                height={100}
                                                className="w-[100%] h-[100%] mx-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            <div className="px-2">
                                                <h2 className="text-xl md:text-3xl font-semibold mb-2 text-orange-500">{data.title}</h2>
                                                <p className="text-[16px] text-gray-700 mt-2">
                                                    <span className="font-medium">Subject:</span> {data.subject}
                                                </p>
                                                <p className="text-[16px] text-gray-700">
                                                    <span className="font-medium">Seller:</span> {data.seller?.fullName}
                                                </p>
                                                <p className="text-xl font-semibold text-orange-400 mt-2">
                                                    @just ₹{data.price}
                                                </p>
                                            </div>
                                            <div className="flex justify-center">
                                                <Link href={`/notes/${data._id}`}>
                                                    <button className="w-full px-6 py-3 cursor-pointer bg-orange-500 text-black font-semibold rounded-xl shadow-md hover:bg-orange-600 transition" >
                                                        Read More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>

                    {
                        isLoading &&
                        <Loader1 />
                    }
                </div>
            </div>
        </>
    );
}

export default page;
