"use client";
import { BookOpen, DollarSign, Search, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function About() {
    const user = useSelector((state) => state.user.currUser)

    useEffect(() => {
        console.log("user data on about page", user)
    }, [user]);

    return (
        <>
            {/* <div className='flex flex-col xl:flex-row py-30'>
                <div className='w-full xl:w-[50vw]'>

                </div>
                <div className='w-full xl:w-[50vw] flex items-center justify-center'>
                    <div className="w-[75%] px-2 md:px-0">
                        <div className="relative">
                            <div
                                className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 transform rotate-3 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                                <div className="bg-white rounded-2xl p-8 transform -rotate-6 shadow-xl">
                                    <div className="text-center flex flex-col items-center">
                                        <div className="text-7xl mb-6">
                                            <Image
                                                src="/notesLogo.png"
                                                alt="Hero image"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                                            Get Premium Quality Self Made notes
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6">
                                            Notes from top students & professionals
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <div className="text-sm text-gray-500">

                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col xl:flex-row py-30 relative'>
                {/* LEFT SIDE */}
                <div className='w-full xl:w-[50vw] flex flex-col justify-center px-10 md:px-20 space-y-3 relative overflow-hidden'>
                    {/* Background decorative circles */}

                    {/* Heading */}
                    <h1 className='text-5xl md:text-5xl font-extrabold font-playfair text-gray-800 leading-tight'>
                        Empowering Students <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>
                            Through Notes
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Notexa connects learners and toppers by creating a single platform
                        where premium quality handwritten notes meet accessibility and affordability.
                    </p>


                    {/* Highlights */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
                            Why Notexa?
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 group">
                                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:scale-125 transition-transform"></div>
                                <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                                    <span className="font-semibold">Affordable</span> notes starting at just ₹29
                                </span>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:scale-125 transition-transform"></div>
                                <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                                    Created by <span className="font-semibold">toppers & students</span> like you
                                </span>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:scale-125 transition-transform"></div>
                                <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                                    <span className="font-semibold">Verified & high-quality</span> content
                                </span>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:scale-125 transition-transform"></div>
                                <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                                    Available in <span className="font-semibold">handwritten or typed</span> formats
                                </span>
                            </li>
                        </ul>
                    </div>


                    {/* CTA buttons */}
                    <div className='flex gap-4 pt-4'>
                        <button className='px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition'>
                            Explore Notes
                        </button>
                        <button className='px-6 py-3 border-2 border-orange-400 text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition'>
                            Upload Yours
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE (untouched) */}
                <div className='w-full xl:w-[50vw] flex items-center justify-center'>
                    <div className="w-[75%] px-2 md:px-0">
                        <div className="relative">
                            <div
                                className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 transform rotate-3 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                                <div className="bg-white rounded-2xl p-8 transform -rotate-6 shadow-xl">
                                    <div className="text-center flex flex-col items-center">
                                        <div className="text-7xl mb-6">
                                            <Image
                                                src="/notesLogo.png"
                                                alt="Hero image"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                                            Get Premium Quality Self Made notes
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6">
                                            Notes from top students & professionals
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <div className="text-sm text-gray-500">

                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute top-20 left-20 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-40 -z-10'></div>
                <div className='absolute bottom-10 right-40 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 -z-10'></div>
            </div>


        </>
    );
}

export default About;
