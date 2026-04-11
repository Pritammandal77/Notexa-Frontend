"use client"
import React from 'react';
import { Carousel } from '../ui/ImageCarousel';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function PopularNotes() {

    return (
        <>
            <div className='w-[100vw] min-h-[65vh] h-auto flex flex-col gap-10 py-15 overflow-x-hidden '>
                <div className='flex items-center justify-between md:px-10 xl:px-25'>
                    <h1 className="text-4xl md:text-5xl font-extrabold px-5 font-playfair text-gray-800 leading-tight">
                        Notes Loved by
                        <span className="text-orange-500"> Students</span>
                    </h1>

                    <Link href="/allnotes" className='hidden md:inline'>
                        <button className="group relative px-6 py-3 cursor-pointer rounded-2xl bg-orange-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-600 active:scale-95 shadow-md hover:shadow-xl">

                            {/* Glow effect */}
                            <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></span>

                            {/* Text */}
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={17}/>
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>
                <div className='flex items-start justify-start'>
                    <Carousel />
                </div>
            </div>
        </>
    );
}

export default PopularNotes;
