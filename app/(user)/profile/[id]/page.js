"use client"

import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
import NotesCard from '@/components/ui/NotesCard';
import { fetchAllNotesByUserId } from '@/utils/notesApi';
import { getUserById } from '@/utils/userApi';
import Image from 'next/image';
import Link from 'next/navigation';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function page() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userNotes, setUserNotes] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const res = await getUserById(id);
                console.log("Other userData", res);
                setUserData(res?.data?.data);
            } catch (error) {
                console.error("Error fetching userData:", error);
            }
        };

        const fetchUserNotes = async () => {
            try {
                const res = await fetchAllNotesByUserId(id);
                console.log("all notes of userData ", res)
                setUserNotes(res.data.data)
            } catch (error) {
                console.log("error whil fetching the notes")
            }
        }

        fetchUser();
        fetchUserNotes();
    }, [id]);




    return (
        <>
            <div className="min-h-screen w-full bg-orange-50 pt-17 xl:pt-0">

                <div className="xl:fixed xl:top-0 xl:left-0 w-full h-auto md:h-auto xl:h-screen xl:w-[25%] 
              bg-orange-100 p-3 md:p-4 xl:pt-20 border-b xl:border-b-0 xl:border-r  border-orange-200 z-20 
               flex flex-col items-center justify-center xl:block md:px-15 lg:px-30 xl:px-4
                  ">

                    <div className="self-start flex md:gap-6 gap-3 md:flex-row xl:flex-row ">

                        {/* Profile Image */}
                        <div className="relative h-14 w-14 md:h-20 md:w-20">
                            {userData?.profilePicture && (
                                <Image
                                    src={userData.profilePicture}
                                    alt="Profile"
                                    fill
                                    sizes="(max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            33vw"
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>

                        {/* userData Info */}
                        <div className="mt-3">
                            <p className="text-md md:text-lg font-semibold text-gray-800">
                                {userData?.fullName}
                            </p>
                            <p className="text-sm md:text-sm text-gray-600 truncate max-w-[200px]">
                                {userData?.email}
                            </p>
                        </div>
                    </div>

                </div>

                <div className="pt-[90px] xl:pt-20 pb-14 ml-0 xl:ml-[25%]">

                    <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                        Uploaded Notes
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">

                        {userNotes && userNotes.map((data) => (
                            <NotesCard
                                key={data._id}
                                notesId={data._id}
                                notesSample1={data?.notesSample1}
                                title={data.title}
                                subject={data.subject}
                                sellerName={data.seller?.fullName}
                                notesPrice={data.price}
                            />
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



            </div >
        </>
    );
}

export default page;
