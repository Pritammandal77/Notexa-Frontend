"use client"
import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
import NotesCard from '@/components/ui/NotesCard';
import { deleteNotes } from '@/utils/notesApi';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

function Page() {

    const allNotes = useSelector((state) => state.notes.allNotes);
    const [openDropdownId, setOpenDropdownId] = useState(null);

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
            <div className='py-17 w-[100vw] min-h-screen h-auto px-2 xl:px-6'>

                <div>
                    <h1 className='text-4xl md:text-5xl px-3 py-5 xl:py-10 xl:px-1 font-extrabold font-playfair text-gray-800 leading-tight'>
                        All {"            "}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>
                            Notes
                        </span>
                    </h1>
                </div>

                {
                    allNotes ? (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                            {allNotes.map((notes) => (
                                <NotesCard
                                    key={notes._id}
                                    notesId={notes._id}
                                    notesSample1={notes?.notesSample1}
                                    title={notes.title}
                                    subject={notes.subject}
                                    sellerName={notes.seller?.fullName}
                                    notesPrice={notes.price}
                                    openDropdownId={openDropdownId}
                                    setOpenDropdownId={setOpenDropdownId}
                                    handleDeleteNotes={handleDeleteNotes}
                                />
                            ))}
                        </div>
                    )
                        :
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-5'>
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                            <NotesCardSkeleton />
                        </div>
                }

            </div>
        </>
    );
}

export default Page;
