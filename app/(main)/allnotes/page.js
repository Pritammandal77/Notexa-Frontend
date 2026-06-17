// "use client"
// import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
// import NotesCard from '@/components/ui/NotesCard';
// import { deleteNotes } from '@/utils/notesApi';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';

// function Page() {

//     const allNotes = useSelector((state) => state.notes.allNotes);
//     const [openDropdownId, setOpenDropdownId] = useState(null);

//     const handleDeleteNotes = async (notesId) => {
//         try {
//             let isDeleted = await deleteNotes(notesId)
//             toast.success("Notes deleted successfully")
//         } catch (error) {
//             console.log("error while deleting notes")
//             toast.error("something went wrong , while deleting the notes")
//         }
//     }

//     return (
//         <>
//             <div className='py-17 w-full min-h-screen h-auto px-2 xl:px-6'>

//                 <div>
//                     <h1 className='text-4xl md:text-5xl px-3 py-5 xl:py-10 xl:px-1 font-extrabold font-playfair text-gray-800 leading-tight'>
//                         All {"            "}
//                         <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>
//                             Notes
//                         </span>
//                     </h1>
//                 </div>

//                 {
//                     allNotes ? (
//                         <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
//                             {allNotes.map((notes) => (
//                                 <NotesCard
//                                     key={notes._id}
//                                     notesId={notes._id}
//                                     notesSample1={notes?.notesSample1}
//                                     title={notes.title}
//                                     subject={notes.subject}
//                                     sellerName={notes.seller?.fullName}
//                                     notesPrice={notes.price}
//                                 />
//                             ))}
//                         </div>
//                     )
//                         :
//                         <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-5'>
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                         </div>
//                 }

//             </div>
//         </>
//     );
// }

// export default Page;



"use client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
import NotesCard from '@/components/ui/NotesCard';
import { deleteNotes } from '@/utils/notesApi';
// import { removeNoteFromState } from '@/store/notesSlice';

const bannerSlides = [
    {
        title: "Find Exactly What You Need",
        subtitle: "Every note is tagged by subject, so you can spot the right one in seconds.",
        cta: "Browse Notes",
        href: "#all-notes",
        image: "https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "Not Sure It's Right? Ask First.",
        subtitle: "Chat with our AI about any note's content before you spend a single rupee.",
        cta: "Try AI Chat",
        href: "/all-notes",
        image: "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "Turn Your Notes Into Income",
        subtitle: "Upload your best notes and keep 70% of every sale, paid out per download.",
        cta: "Start Selling",
        href: "/sellnotes",
        image: "https://images.unsplash.com/photo-1735825764460-c5dec05d6253?auto=format&fit=crop&w=1600&q=80"
    }
];

function Page() {
    const dispatch = useDispatch();
    const allNotes = useSelector((state) => state.notes.allNotes);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isHovered]);

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    };

    const handleDeleteNotes = async (notesId) => {
        try {
            await deleteNotes(notesId);
            // dispatch(removeNoteFromState(notesId));
            toast.success("Notes deleted successfully");
        } catch (error) {
            console.error("Error while deleting notes:", error);
            toast.error("Something went wrong while deleting the notes");
        }
    };

    return (
        <div className='w-full min-h-screen py-20 px-2 xl:px-6'>

            {/* Banner Carousel */}
            <div
                className='relative w-full h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden mb-10 shadow-xl group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 60 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='absolute inset-0'
                    >
                        <div
                            className='absolute inset-0 bg-cover bg-center'
                            style={{ backgroundImage: `url(${bannerSlides[currentSlide].image})` }}
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10' />

                        <div className='relative h-full flex items-center px-8 md:px-14'>
                            <div className='max-w-md'>
                                <h2 className='text-2xl md:text-3xl font-extrabold font-playfair text-white mb-2'>
                                    {bannerSlides[currentSlide].title}
                                </h2>
                                <p className='text-sm md:text-base text-white/90 mb-5'>
                                    {bannerSlides[currentSlide].subtitle}
                                </p>
                                <Link
                                    href={bannerSlides[currentSlide].href}
                                    className='inline-block bg-white text-orange-600 font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform'
                                >
                                    {bannerSlides[currentSlide].cta}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    className='absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity'
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={goToNext}
                    aria-label="Next slide"
                    className='absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity'
                >
                    <ChevronRight size={20} />
                </button>

                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                    {bannerSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>

            <div id="all-notes">
                <h1 className='text-4xl md:text-5xl px-3 py-5 xl:py-10 xl:px-1 font-extrabold font-playfair text-gray-800 leading-tight'>
                    All{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>
                        Notes
                    </span>
                </h1>
            </div>

            {!allNotes ? (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-5'>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <NotesCardSkeleton key={idx} />
                    ))}
                </div>
            ) : allNotes.length === 0 ? (
                <div className="w-full text-center py-20 text-gray-500">
                    <p className="text-xl font-medium">No notes available right now.</p>
                    <p className="text-sm mt-1">Be the first to list yours!</p>
                </div>
            ) : (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                >
                    {allNotes.map((notes) => (
                        <motion.div
                            key={notes._id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                            }}
                        >
                            <NotesCard
                                notesId={notes._id}
                                notesSample1={notes?.notesSample1}
                                title={notes.title}
                                subject={notes.subject}
                                sellerName={notes.seller?.fullName}
                                notesPrice={notes.price}
                                onDelete={handleDeleteNotes}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Page;