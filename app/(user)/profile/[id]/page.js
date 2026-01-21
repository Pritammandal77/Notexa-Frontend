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

                        <div>
                            <p>
                                {userData?.aboutUser}
                            </p>
                        </div>
                    </div>

                    <div className="social-buttons absolute bottom-7 right-7 flex items-center gap-5">
                        <div className="socialIcons">
                            <a href="https://www.linkedin.com/in/pritam-mandal-871510281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-button linkedin" target="_blank">
                                <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icons" stroke="none" strokeWidth="1">
                                        <g transform="translate(-702.000000, -265.000000)">
                                            <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/pritam_mandal_77/profilecard/?igsh=MWE5cXF5ZGpxam84eA==" className="social-button instagram" target="_blank">
                                <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth="1">
                                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
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
