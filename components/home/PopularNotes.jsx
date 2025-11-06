"use client"
import React from 'react';
import { Carousel } from '../ui/ImageCarousel';
import { useSelector } from 'react-redux';

function PopularNotes() {

    // const allNotes = useSelector((state) => state.notes.allNotes)
    // console.log("notes in cards component : ", allNotes)

    return (
        <>
            <div className='w-[100vw] h-auto flex flex-col gap-10 py-15 overflow-x-hidden'>
                <div className='flex items-center justify-start xl:px-30'>
                    <h1 className="text-5xl md:text-5xl font-extrabold font-playfair text-gray-800 leading-tight">
                        <span className="text-orange-500">Popular</span> Notes
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
