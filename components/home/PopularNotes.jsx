"use client"
import React from 'react';
import { Carousel } from '../ui/ImageCarousel';

function PopularNotes() {

    return (
        <>
            <div className='w-[100vw] min-h-[65vh] h-auto flex flex-col gap-10 py-15 overflow-x-hidden '>
                <div className='flex items-center justify-start xl:px-30'>
                    <h1 className="text-4xl md:text-5xl font-extrabold px-5 font-playfair text-gray-800 leading-tight">
                       Notes Loved by
                        <span className="text-orange-500"> Students</span> 
                    </h1>
                </div>
                <div className='flex items-start justify-start'>
                    <Carousel />
                </div>
            </div>
        </>
    );
}

export default PopularNotes;
