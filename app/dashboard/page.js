"use client"

import Loader1 from '@/components/Loader/Loader';
import { deleteNotes, fetchCurrentUserNotes } from '@/utils/notesApi';
import Link from "next/link";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Ellipsis } from 'lucide-react';
import { toast } from 'sonner';
import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';

function Page() {

    const user = useSelector((state) => state.user?.currUser?.user)
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currUserNotes, setCurrUserNotes] = useState(null)
    const [openDropdownId, setOpenDropdownId] = useState(null);

    useEffect(() => {
        console.log("user data on dashboard", user)
        setUserData(user);
    }, [user]);

    useEffect(() => {
        async function fetchNotes() {
            setIsLoading(true);
            let data = await fetchCurrentUserNotes();
            console.log("currUser notes", data.data.length)
            setCurrUserNotes(data.data)
            setIsLoading(false)
        }
        fetchNotes();
    }, []);

    const handleDeleteNotes = async (notesId) => {
        try {
            let isDeleted = await deleteNotes(notesId)
            toast.success("Notes deleted successfully")
        } catch (error) {
            console.log("error while deleting notes")
            toast.error("something went wrong , while deleting the notes")
        }
    }

    return (
        <>
            <div className="min-h-screen w-full bg-orange-50 pt-17 xl:pt-0">
                {/* LEFT SIDEBAR */}
                <div className="xl:fixed xl:top-0 xl:left-0 w-full h-auto md:h-auto xl:h-screen xl:w-[25%] 
              bg-orange-100 p-3 md:p-4 xl:pt-20 border-b xl:border-b-0 xl:border-r  border-orange-200 z-20 
               flex flex-col items-center justify-center xl:block md:px-15 xl:px-0
                  ">

                    <div className="self-start flex md:gap-6 gap-3 md:flex-row xl:flex-row ">

                        {/* Profile Image */}
                        <div className="relative h-14 w-14 md:h-20 md:w-20">
                            {user?.profilePicture && (
                                <Image
                                    src={user.profilePicture}
                                    alt="Profile"
                                    fill
                                    sizes="(max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            33vw"
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>

                        {/* User Info */}
                        <div className="">
                            <p className="text-md md:text-lg font-semibold text-gray-800">
                                {user?.fullName}
                            </p>
                            <p className="text-sm md:text-sm text-gray-600 truncate max-w-[200px]">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 w-[100%] gap-3 mt-10'>
                        <div className='py-3 w-[90%] bg-orange-50 rounded-2xl p-3'>
                            <h1 className='font-semibold'>Notes uploaded</h1>
                            <p className='text-[25px] font-bold text-orange-500 text-center mt-2'>
                                {
                                    currUserNotes
                                        ? currUserNotes.length
                                        : <span>loading...</span>
                                }
                            </p>

                        </div>
                        <div className='py-3 w-[90%] bg-orange-50 rounded-2xl p-3'>
                            <h1 className='font-semibold'>Notes purchased</h1>
                            <p className='text-[25px] font-bold text-orange-500 text-center mt-2'>+5</p>
                        </div>
                        <div className='py-3 w-[90%] bg-orange-50 rounded-2xl p-3'>
                            <h1 className='font-semibold'>Total downloads</h1>
                            <p className='text-[25px] font-bold text-orange-500 text-center mt-2'>+5</p>

                        </div>
                        <div className='py-3 w-[90%] bg-orange-50 rounded-2xl p-3'>
                            <h1 className='font-semibold'>Notes uploaded</h1>
                            <p className='text-[25px] font-bold text-orange-500 text-center mt-2'>+5</p>

                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="pt-[90px] xl:pt-20 pb-14 ml-0 xl:ml-[25%]">

                    {/* Heading */}
                    <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                        Notes
                    </div>

                    {/* Notes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">

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

                                    <div className='relative'>
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

                                        <div className='absolute top-0 right-0 flex flex-col'>
                                            <Ellipsis
                                                className='cursor-pointer self-end'
                                                onClick={() => setOpenDropdownId(openDropdownId === data._id ? null : data._id)}
                                            />

                                            {openDropdownId === data._id && (
                                                <ul className='bg-orange-100 rounded-2xl'>
                                                    <li className='border-1 p-2 rounded-t-xl border-orange-300 hover:bg-orange-200 cursor-pointer'
                                                        onClick={() => handleDeleteNotes(data._id)}
                                                    >Delete notes
                                                    </li>
                                                    <li className='border-1 p-2 rounded-b-xl border-orange-300 hover:bg-orange-200 cursor-pointer'>Edit notes</li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    <Link href={`/notes/${data._id}`}>
                                        <button className="mt-4 w-full px-4 py-2  bg-orange-500 text-white text-sm 
                                        md:text-basefont-semibold rounded-xl hover:bg-orange-600 transition cursor-pointer ">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isLoading &&
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-5'>
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                        </div>
                    }
                </div>

            </div>



        </>
    );
}

export default Page;
