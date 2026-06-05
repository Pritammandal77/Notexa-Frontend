"use client";

import NotesCardSkeleton from "@/components/SkeletonLoaders/NotesCardSkeleton";
import NotesCard from "@/components/ui/NotesCard";
import { fetchAllNotesByUserId } from "@/utils/notesApi";
import { getUserById } from "@/utils/userApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

//   Animation helpers  
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

//   LinkedIn Icon   
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

//   Instagram Icon   
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

//   Avatar Initials fallback   
function AvatarInitials({ name }) {
    const initials = name
        ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
        : "?";
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white text-3xl font-extrabold font-playfair">
            {initials}
        </div>
    );
}


//  New Component for Individual Notes to safe-guard Hooks Rule  
function AnimatedNotesCard({ data, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={index % 3}
        >
            <NotesCard
                notesId={data._id}
                notesSample1={data?.notesSample1}
                title={data.title}
                subject={data.subject}
                sellerName={data.seller?.fullName}
                notesPrice={data.price}
            />
        </motion.div>
    );
}

// Main Page   
function page() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userNotes, setUserNotes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserById(id);
                setUserData(res?.data?.data);
            } catch (error) {
                console.error("Error fetching userData:", error);
            }
        };

        const fetchUserNotes = async () => {
            setIsLoading(true);
            try {
                const res = await fetchAllNotesByUserId(id);
                setUserNotes(res.data.data);
            } catch (error) {
                console.log("error while fetching the notes");
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchUser();
            fetchUserNotes();
        }
    }, [id]);

    const noteCount = userNotes?.length ?? 0;

    return (
        <div className="min-h-screen bg-orange-50 font-sans">

            {/*   HERO BANNER   */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative h-52 md:h-64 w-full bg-gradient-to-br from-orange-400 via-orange-500 to-amber-400 overflow-hidden"
            >
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full" />
                <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-white/10 rounded-full" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full" />

                {/* Pattern dots */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Notexa watermark text */}
                <span className="absolute bottom-4 right-6 text-white/10 font-extrabold text-7xl select-none font-playfair">
                    Notexa
                </span>
            </motion.div>

            {/*   PROFILE CARD (overlapping banner)    */}
            <div className="max-w-5xl mx-auto px-4 md:px-6">

                {/* Avatar + Name row */}
                <div className="relative -mt-16 md:-mt-20 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6">
                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden ring-4 ring-white shadow-xl shadow-orange-200 flex-shrink-0 bg-orange-100"
                    >
                        {userData?.profilePicture && userData.profilePicture.trim() !== "" ? (
                            <Image
                                src={userData.profilePicture}
                                alt="Profile"
                                fill
                                sizes="144px"
                                className="object-cover"
                            />
                        ) : (
                            <AvatarInitials name={userData?.fullName} />
                        )}
                    </motion.div>

                    {/* Name + email + socials */}
                    <div className="pb-2 flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-playfair leading-tight">
                                {userData?.fullName ?? (
                                    <span className="inline-block w-40 h-7 bg-orange-100 rounded-lg animate-pulse" />
                                )}
                            </h1>
                            <p className="text-gray-400 text-sm mt-1 truncate max-w-xs">
                                {userData?.email ?? ""}
                            </p>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={2}
                            className="flex gap-2"
                        >
                            {userData?.linkedinLink && (
                                <a
                                    href={userData.linkedinLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 hover:border-orange-300 hover:bg-orange-50 rounded-xl text-gray-600 hover:text-orange-600 transition-all duration-200 text-sm font-medium shadow-sm"
                                >
                                    <LinkedInIcon />
                                    <span className="hidden sm:inline">LinkedIn</span>
                                </a>
                            )}
                            {userData?.instagramLink && (
                                <a
                                    href={userData.instagramLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 hover:border-orange-300 hover:bg-orange-50 rounded-xl text-gray-600 hover:text-orange-600 transition-all duration-200 text-sm font-medium shadow-sm"
                                >
                                    <InstagramIcon />
                                    <span className="hidden sm:inline">Instagram</span>
                                </a>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/*   ABOUT BIO   */}
                {userData?.aboutUser && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={3}
                        className="mb-6 p-5 bg-white rounded-2xl border border-orange-100 shadow-sm"
                    >
                        <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">About</p>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {userData.aboutUser}
                        </p>
                    </motion.div>
                )}

                {/*   DIVIDER    */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 font-playfair whitespace-nowrap">
                        Uploaded Notes
                    </h2>
                    {noteCount > 0 && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">
                            {noteCount} notes
                        </span>
                    )}
                    <div className="flex-1 h-px bg-orange-100" />
                </div>

                {/*   NOTES GRID   */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-20">
                        {[...Array(6)].map((_, i) => <NotesCardSkeleton key={i} />)}
                    </div>
                ) : userNotes && noteCount > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-20">
                        {userNotes.map((data, i) => (
                            <AnimatedNotesCard key={data._id} data={data} index={i} />
                        ))}
                    </div>
                ) : (
                    //   EMPTY STATE  
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col items-center justify-center py-24 pb-32 text-center"
                    >
                        <div className="w-24 h-24 bg-orange-100 rounded-3xl flex items-center justify-center text-5xl mb-5 shadow-inner">
                            📭
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 font-playfair mb-2">No Notes Yet</h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            {userData?.fullName?.split(" ")[0] ?? "This user"} hasn't uploaded any notes yet. Check back later!
                        </p>
                    </motion.div>
                )}
            </div>

            {/*   MOBILE SOCIAL FAB    */}
            {(userData?.linkedinLink || userData?.instagramLink) && (
                <div className="fixed bottom-5 right-5 flex flex-col gap-2 md:hidden z-50">
                    {userData?.linkedinLink && (
                        <motion.a
                            href={userData.linkedinLink}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                            className="w-12 h-12 bg-white border border-orange-200 shadow-lg rounded-2xl flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200"
                        >
                            <LinkedInIcon />
                        </motion.a>
                    )}
                    {userData?.instagramLink && (
                        <motion.a
                            href={userData.instagramLink}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                            className="w-12 h-12 bg-white border border-orange-200 shadow-lg rounded-2xl flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200"
                        >
                            <InstagramIcon />
                        </motion.a>
                    )}
                </div>
            )}
        </div>
    );
}

export default page;






















// Old profile page code
// "use client"

// import NotesCardSkeleton from '@/components/SkeletonLoaders/NotesCardSkeleton';
// import NotesCard from '@/components/ui/NotesCard';
// import { fetchAllNotesByUserId } from '@/utils/notesApi';
// import { getUserById } from '@/utils/userApi';
// import Image from 'next/image';
// import Link from 'next/navigation';
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// function page() {
//     const { id } = useParams();
//     const [userData, setUserData] = useState(null);
//     const [userNotes, setUserNotes] = useState(null);
//     const [isLoading, setIsLoading] = useState(false)

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await getUserById(id);
//                 setUserData(res?.data?.data);
//                 console.log(res)
//             } catch (error) {
//                 console.error("Error fetching userData:", error);
//             }
//         };

//         const fetchUserNotes = async () => {
//             try {
//                 const res = await fetchAllNotesByUserId(id);
//                 setUserNotes(res.data.data)
//             } catch (error) {
//                 console.log("error whil fetching the notes")
//             }
//         }

//         fetchUser();
//         fetchUserNotes();
//     }, [id]);




//     return (
//         <>
//             <div className="min-h-screen w-full bg-orange-50 pt-17 xl:pt-0">

//                 <div className="xl:fixed xl:top-0 xl:left-0 w-full h-auto md:h-auto xl:h-screen xl:w-[25%] 
//               bg-orange-100 p-3 md:p-4 xl:pt-20 border-b xl:border-b-0 xl:border-r  border-orange-200 z-20 
//                flex flex-col items-center justify-center xl:block md:px-15 lg:px-30 xl:px-4 relative
//                   ">

//                     <div className="self-start flex md:gap-6 gap-3 flex-col xl:flex-col w-full">

//                         {/* Profile Image */}
//                         <div className='flex gap-5'>
//                             <div className="relative h-14 w-14 md:h-20 md:w-20">
//                                 {userData?.profilePicture && (
//                                     <Image
//                                         src={userData.profilePicture}
//                                         alt="Profile"
//                                         fill
//                                         sizes="(max-width: 640px) 100vw,
//                                             (max-width: 1024px) 50vw,
//                                             33vw"
//                                         className="object-cover rounded-full"
//                                     />
//                                 )}
//                             </div>

//                             {/* userData Info */}
//                             <div className="mt-3">
//                                 <p className="text-md md:text-lg font-semibold text-gray-800">
//                                     {userData?.fullName}
//                                 </p>
//                                 <p className="text-sm md:text-sm text-gray-600 truncate max-w-[200px]">
//                                     {userData?.email}
//                                 </p>
//                             </div>
//                         </div>
//                         {
//                             userData?.aboutUser &&
//                             <div className='mt-5 bg-orange-50 p-2 w-full rounded-2xl'>
//                                 <p className="whitespace-pre-line">
//                                     {userData?.aboutUser}
//                                 </p>
//                             </div>

//                         }
//                     </div>

//                     <div className="hidden social-buttons absolute bottom-1 right-1 lg:bottom-7 lg:right-7 md:flex md:items-center gap-5">
//                         <div className="socialIcons">
//                             {
//                                 userData?.instagramLink &&
//                                 <a href={userData?.instagramLink} className="social-button linkedin" target="_blank">
//                                     <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                                         <g id="Icons" stroke="none" strokeWidth="1">
//                                             <g transform="translate(-702.000000, -265.000000)">
//                                                 <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
//                                                 </path>
//                                             </g>
//                                         </g>
//                                     </svg>
//                                 </a>
//                             }
//                             {
//                                 userData?.linkedinLink &&
//                                 <a href={userData?.linkedinLink} className="social-button instagram" target="_blank">
//                                     <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                                         <g id="Page-1" stroke="none" strokeWidth="1">
//                                             <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
//                                                 <g id="icons" transform="translate(56.000000, 160.000000)">
//                                                     <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

//                                                     </path>
//                                                 </g>
//                                             </g>
//                                         </g>
//                                     </svg>
//                                 </a>
//                             }
//                         </div>
//                     </div>

//                 </div>

//                 <div className="pt-[20px] xl:pt-20 pb-14 ml-0 xl:ml-[25%] ">

//                     <div className="px-4 md:px-6 text-2xl md:text-3xl font-bold text-orange-600 mb-6">
//                         Uploaded Notes
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">

//                         {
//                             userNotes && userNotes?.length != 0 ?
//                                 userNotes.map((data) => (
//                                     <NotesCard
//                                         key={data._id}
//                                         notesId={data._id}
//                                         notesSample1={data?.notesSample1}
//                                         title={data.title}
//                                         subject={data.subject}
//                                         sellerName={data.seller?.fullName}
//                                         notesPrice={data.price}
//                                     />
//                                 ))
//                                 :
//                                 <div className='xl:min-h-[80vh] w-[90vw] xl:w-[50vw] pt-[90px] xl:pt-20 pb-14 ml-0 xl:ml-[25%] flex items-center justify-center'>
//                                     <h1 className='text-2xl md:text-3xl font-semibold'>No Notes Uploaded</h1>
//                                 </div>
//                         }

//                     </div>

//                     {isLoading &&
//                         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-5'>
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                             <NotesCardSkeleton />
//                         </div>
//                     }
//                 </div>

//                 {/* for mobile screens */}
//                 <div className="social-buttons fixed bottom-5 right-5 lg:bottom-7 lg:right-7 flex md:hidden md:items-center gap-5">
//                     <div className="socialIcons">
//                         {
//                             userData?.instagramLink &&
//                             <a href={userData?.instagramLink} className="social-button linkedin" target="_blank">
//                                 <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                                     <g id="Icons" stroke="none" strokeWidth="1">
//                                         <g transform="translate(-702.000000, -265.000000)">
//                                             <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
//                                             </path>
//                                         </g>
//                                     </g>
//                                 </svg>
//                             </a>
//                         }
//                         {
//                             userData?.linkedinLink &&
//                             <a href={userData?.linkedinLink} className="social-button instagram" target="_blank">
//                                 <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                                     <g id="Page-1" stroke="none" strokeWidth="1">
//                                         <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
//                                             <g id="icons" transform="translate(56.000000, 160.000000)">
//                                                 <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

//                                                 </path>
//                                             </g>
//                                         </g>
//                                     </g>
//                                 </svg>
//                             </a>
//                         }
//                     </div>
//                 </div>

//             </div >
//         </>
//     );
// }

// export default page;
