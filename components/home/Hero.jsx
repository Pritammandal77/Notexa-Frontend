"use client";

import { setAllNotes } from '@/redux/slices/notesSlice';
import { setCurrUser } from '@/redux/slices/userSlice';
import { fetchWithAuth } from '@/utils/auth';
import { fetchAllNotes } from '@/utils/notesApi';
import axios from 'axios';
import { Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Hero() {

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center relative'>

                <div className='w-[100%] px-3 xl:w-[80vw] z-10 flex flex-col items-center'>
                    <span className="flex items-center gap-2 text-sm font-medium bg-orange-100 text-orange-800 border-1 px-3 py-1 rounded-full mb-4">
                        <Sparkles size={15} />  Notexa – Learn, Share, Earn
                    </span>

                    <h1 className='text-5xl md:text-6xl lg:text-7xl text-center font-bold'>
                        Turn Your <span className='text-orange-400'>Notes</span> Into <span className='text-orange-400'>Opportunities</span><br />
                        Sell, Share, and Learn Together
                    </h1>
                    <p className='text-center text-lg text-[#222222] mt-6'>
                        Join our platform to share your handwritten notes, help others learn, and earn from your knowledge. <br /> Discover valuable notes, connect with students, and make learning rewarding for everyone.
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <button className="px-6 py-3 bg-[#ff7a1f] text-white cursor-pointer font-semibold rounded-lg hover:bg-[#ff9340] transition"
                            onClick={() => alert("Hello")}
                        >
                            Get Started
                        </button>

                        <button className="px-6 py-3 bg-[#ff7a1f] text-white font-semibold rounded-lg hover:bg-[#ff9340] transition-all duration-200 shadow-md hover:shadow-lg">
                            Browse Notes
                        </button>

                    </div>
                </div>

                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#fff8f3", // light orange base
                        backgroundImage: `
      linear-gradient(to right, rgba(255, 165, 0, 0.15) 0.5px, transparent 0.2px),
      linear-gradient(to bottom, rgba(255, 165, 0, 0.15) 0.5px, transparent 0.2px),
      radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0.05) 35%, transparent 90%)
    `,
                        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                    }}
                />



            </div>
        </>
    );
}

export default Hero;
