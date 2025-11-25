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
            <div className="min-h-screen w-full bg-orange-50 pt-18 xl:pt-0">

                {/* LEFT SIDEBAR */}
                <div className="
        xl:fixed xl:top-0 xl:left-0 
        w-full h-[80px] md:h-[90px] xl:h-screen
        xl:w-[25%] 
        bg-orange-100 
        p-3 md:p-4 
        xl:pt-20 
        border-b xl:border-b-0 xl:border-r 
        border-orange-200 
        z-20 
        flex items-center justify-center xl:block
    ">

                    <div className="flex items-center justify-center md:gap-6 gap-3 md:flex-row xl:flex-row">

                        {/* Profile Image */}
                        <div className="relative h-14 w-14 md:h-20 md:w-20">
                            {user?.profilePicture && (
                                <Image
                                    src={user.profilePicture}
                                    alt="Profile"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>

                        {/* User Info */}
                        <div className="text-center xl:text-left">
                            <p className="text-sm md:text-lg font-semibold text-gray-800">
                                {user?.fullName}
                            </p>
                            <p className="text-xs md:text-sm text-gray-600 truncate max-w-[200px]">
                                {user?.email}
                            </p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <h1>Notes uploaded</h1>
                            <p>5</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="
        pt-[90px] 
        xl:pt-20 
        pb-14 
        ml-0 
        xl:ml-[25%]
    ">

                    {/* Heading */}
                    <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                        Notes
                    </div>

                    {/* Notes Grid */}
                    <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            xl:grid-cols-3 
            gap-4 md:gap-6 
            px-4 md:px-6
        ">

                        {currUserNotes && currUserNotes.map((data) => (
                            <div
                                key={data._id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between min-h-[340px]"
                            >

                                {/* NOTE IMAGE */}
                                <div className="w-full h-36 md:h-40 overflow-hidden rounded-xl">
                                    <Image
                                        src={data?.notesSample1}
                                        alt={data.title || "note"}
                                        width={600}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="mt-4 flex flex-col justify-between flex-1">

                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-orange-500">
                                            {data.title}
                                        </h2>

                                        <p className="text-sm md:text-md text-gray-700 mt-2">
                                            <span className="font-medium">Subject:</span> {data.subject}
                                        </p>

                                        <p className="text-sm md:text-md text-gray-700">
                                            <span className="font-medium">Seller:</span> {data.seller?.fullName}
                                        </p>

                                        <p className="text-xl md:text-2xl font-bold text-orange-400 mt-2">
                                            ₹{data.price}
                                        </p>
                                    </div>

                                    <Link href={`/notes/${data._id}`}>
                                        <button className="
                                mt-4 w-full px-4 py-2 
                                bg-orange-500 text-white 
                                text-sm md:text-base
                                font-semibold 
                                rounded-xl 
                                hover:bg-orange-600 transition
                            ">
                                            Read More
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>

                    {isLoading && <Loader1 />}
                </div>

            </div>



        </>
    );
}

export default page;
