"use client"

import { deleteNotes, fetchCurrentUserNotes } from '@/utils/notesApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Ellipsis } from 'lucide-react';
import { toast } from 'sonner';
import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
import { getPurchasedNotes } from '@/utils/userApi';
import NotesCard from '@/components/ui/NotesCard';
import Link from 'next/link';
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();

    const user = useSelector((state) => state.user?.currUser?.user)
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currUserNotes, setCurrUserNotes] = useState(null)
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [purchasedNotes, setPurchasedNotes] = useState(null);
    const [activeTab, setActiveTab] = useState("uploaded"); // "uploaded" | "purchased"

    // if (!userData) {
    //     router.push("/")
    // }

    useEffect(() => {
        console.log("user data on dashboard", user)
        setUserData(user);

        const fetchPurchasedNotes = async () => {
            try {
                setIsLoading(true)
                const res = await getPurchasedNotes();
                setIsLoading(false)
                setPurchasedNotes(res?.data?.data?.notesPurchased)
            } catch (err) {
                console.error(err);
            }
        };

        fetchPurchasedNotes();
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

                <div className="xl:fixed xl:top-0 xl:left-0 w-full h-auto md:h-auto xl:h-screen xl:w-[25%] 
              bg-orange-100 p-3 md:p-4 xl:pt-20 border-b xl:border-b-0 xl:border-r  border-orange-200 z-20 
               flex flex-col items-center justify-center xl:block md:px-15 lg:px-30 xl:px-4
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
                        <div className="mt-3">
                            <p className="text-md md:text-lg font-semibold text-gray-800">
                                {user?.fullName}
                            </p>
                            <p className="text-sm md:text-sm text-gray-600 truncate max-w-[200px]">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <Link href="/sellnotes">
                        <button className='w-[90vw] md:w-[85vw] lg:w-[75vw] xl:w-full py-2 lg:py-3 xl:py-2 cursor-pointer bg-orange-500 rounded-2xl text-white font-semibold mt-5'>Sell Notes</button>
                    </Link>

                    <div className="grid grid-cols-2 w-full gap-3 mt-10">

                        {/* UPLOADED */}
                        <div
                            onClick={() => setActiveTab("uploaded")}
                            className={`py-3 w-[90%] rounded-2xl p-3 cursor-pointer transition
                                        ${activeTab === "uploaded"
                                    ? "bg-orange-200 border-2 border-orange-400"
                                    : "bg-orange-50"
                                }`}
                        >
                            <h1 className="font-semibold">Notes uploaded</h1>
                            <p className="text-[25px] font-bold text-orange-500 text-center mt-2">
                                {currUserNotes ? currUserNotes.length : "loading..."}
                            </p>
                        </div>

                        {/* PURCHASED */}
                        <div
                            onClick={() => setActiveTab("purchased")}
                            className={`py-3 w-[90%] rounded-2xl p-3 cursor-pointer transition
                                         ${activeTab === "purchased"
                                    ? "bg-orange-200 border-2 border-orange-400"
                                    : "bg-orange-50"
                                }`}
                        >
                            <h1 className="font-semibold">Notes purchased</h1>
                            <p className="text-[25px] font-bold text-orange-500 text-center mt-2">
                                {user?.notesPurchased?.length ?? "loading..."}
                            </p>
                        </div>
                    </div>
                </div>

                {
                    activeTab === "uploaded" && (
                        <div className="pt-[90px] xl:pt-20 pb-14 ml-0 xl:ml-[25%]">

                            <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                                Uploaded Notes
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">

                                {currUserNotes && currUserNotes.map((data) => (
                                    <NotesCard
                                        key={data._id}
                                        notesId={data._id}
                                        notesSample1={data?.notesSample1}
                                        title={data.title}
                                        subject={data.subject}
                                        sellerName={data.seller?.fullName}
                                        notesPrice={data.price}
                                        openDropdownId={openDropdownId}
                                        setOpenDropdownId={setOpenDropdownId}
                                        handleDeleteNotes={handleDeleteNotes}
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
                    )
                }

                {
                    activeTab === "purchased" && (
                        <div className="pt-[90px] xl:pt-20 pb-14 ml-0 xl:ml-[25%]">

                            <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                                Purchased Notes
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">

                                {purchasedNotes && purchasedNotes.map((data) => (
                                    <NotesCard
                                        key={data._id}
                                        notesId={data._id}
                                        notesSample1={data?.notesSample1}
                                        title={data.title}
                                        subject={data.subject}
                                        sellerName={data.seller?.fullName}
                                        notesPrice={data.price}
                                        openDropdownId={openDropdownId}
                                        setOpenDropdownId={setOpenDropdownId}
                                        handleDeleteNotes={handleDeleteNotes}
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
                    )
                }

            </div >
        </>
    );
}

export default Page;
