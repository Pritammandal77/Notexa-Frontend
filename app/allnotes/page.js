"use client"
import React from 'react';
import { useSelector } from 'react-redux';

function page() {

    const allNotes = useSelector((state) => state.notes.allNotes);
    console.log("all notes", allNotes)

    return (
        <>
            <div className='py-17 w-full h-auto'>
                Hello
            </div>
        </>
    );
}

export default page;
