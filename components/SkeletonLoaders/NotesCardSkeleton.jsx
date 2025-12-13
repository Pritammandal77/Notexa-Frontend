import React from 'react';
import './NotesDetailsPage.css'

function NotesCardSkeleton() {
    return (
        <>
            <div className="min-w-[350px] bg-white border border-orange-100 rounded-xl shadow-md p-3 flex-shrink-0">

                {/* Image */}
                <div className="w-full h-40 overflow-hidden rounded-lg skeleton" />

                {/* Title */}
                <div className="h-6 w-3/4 skeleton rounded mt-4" />

                {/* Subject */}
                <div className="h-4 w-1/2 skeleton rounded mt-2" />

                {/* Seller */}
                <div className="h-4 w-2/3 skeleton rounded mt-2" />

                {/* Price */}
                <div className="h-7 w-24 skeleton rounded mt-3" />

                {/* Button */}
                <div className="h-10 w-full skeleton rounded-lg mt-4" />
            </div>
        </>
    );
}

export default NotesCardSkeleton;
