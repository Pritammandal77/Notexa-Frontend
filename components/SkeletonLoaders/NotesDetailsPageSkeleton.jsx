import React from 'react';
import './NotesDetailsPage.css'

function NotesDetailsPageSkeleton() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-24 pb-16 px-0 md:px-20 xl:px-0">

                {/* TOP HEADER */}
                <div className="max-w-7xl mx-auto xl:mb-10 px-3 xl:px-0 flex flex-col lg:flex-row justify-between gap-6">
                    <div className="space-y-3">
                        <div className="h-8 w-64 skeleton rounded-lg" />
                        <div className="h-4 w-40 skeleton rounded-md" />
                    </div>

                    <div className="h-12 w-full sm:w-44 skeleton rounded-xl" />
                </div>

                {/* 3 TOP BOXES */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 p-3">

                    {/* SELLER BOX */}
                    <div className="order-2 xl:order-1 bg-white/80 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 space-y-6">

                        {/* Seller info */}
                        <div className="flex items-center gap-4 border-b pb-4">
                            <div className="w-16 h-16 skeleton rounded-full" />
                            <div className="space-y-2 flex-1">
                                <div className="h-4 w-32 skeleton rounded" />
                                <div className="h-3 w-40 skeleton rounded" />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-4 skeleton rounded" />
                            ))}
                        </div>

                        {/* Price box */}
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 space-y-4">
                            <div className="flex justify-between">
                                <div className="h-4 w-20 skeleton rounded" />
                                <div className="h-8 w-24 skeleton rounded" />
                            </div>
                            <div className="h-12 w-full skeleton rounded-xl" />
                        </div>

                        {/* About (mobile only) */}
                        <div className="xl:hidden space-y-3">
                            <div className="h-6 w-40 skeleton rounded" />
                            <div className="h-4 w-full skeleton rounded" />
                            <div className="h-4 w-[90%] skeleton rounded" />
                            <div className="h-4 w-[80%] skeleton rounded" />
                        </div>
                    </div>

                    {/* IMAGE SLIDER */}
                    <div className="order-1 xl:order-2 xl:col-span-2 bg-white/70 h-[400px] rounded-2xl border border-orange-200 p-4">
                        <div className="w-full h-full skeleton rounded-xl" />
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-5 xl:gap-10 mt-10 p-3 xl:p-0">

                    {/* ABOUT (desktop) */}
                    <div className="hidden xl:block bg-white rounded-2xl border border-orange-200 p-8 space-y-4">
                        <div className="h-6 w-48 skeleton rounded" />
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-4 w-full skeleton rounded" />
                        ))}
                    </div>

                    {/* REVIEWS */}
                    <div className="bg-white rounded-2xl border border-orange-200 p-8 space-y-6">
                        <div className="h-6 w-32 skeleton rounded" />

                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex justify-between gap-4 border-b pb-4">
                                <div className="space-y-2 flex-1">
                                    <div className="h-4 w-32 skeleton rounded" />
                                    <div className="h-3 w-full skeleton rounded" />
                                </div>
                                <div className="h-4 w-10 skeleton rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotesDetailsPageSkeleton;
