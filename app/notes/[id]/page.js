// "use client";
// import { getNotesById } from "@/utils/notesApi";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// function Page() {
//     const { id } = useParams();
//     const [notesData, setNotesdata] = useState(null)

//     useEffect(() => {
//         async function fetchNote() {
//             const data = await getNotesById(id);
//             console.log(data);
//             setNotesdata(data);
//         }
//         fetchNote();
//     }, []);

//     return (
//         <div className="pt-17 w-full h-300">
//             Note detail page for ID: {id}
//         </div>
//     );
// }

// export default Page;


"use client";
import React, { useEffect, useState } from "react";
import { getNotesById } from "@/utils/notesApi";
import { useParams } from "next/navigation";
import {
    Download,
    Eye,
    FileText,
    Calendar,
    User,
    Star,
} from "lucide-react";

function Page() {
    const { id } = useParams();
    const [notesData, setNotesData] = useState(null);

    useEffect(() => {
        async function fetchNote() {
            const res = await getNotesById(id);
            setNotesData(res?.data);
        }
        fetchNote();
    }, [id]);

    if (!notesData)
        return (
            <div className="flex items-center justify-center h-[80vh] text-gray-500 text-lg">
                Loading Note Details...
            </div>
        );

    const {
        title,
        description,
        subject,
        className,
        notesSample1,
        notesSample2,
        notesUrl,
        pagesCount,
        price,
        totalDownloads,
        viewsCount,
        createdAt,
        seller,
        reviews,
    } = notesData;

    const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const handleDownload = () => {
        window.open(`http://localhost:8000/api/v1/notes/download/${id}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-20">

            {/* ===== Header ===== */}
            <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {title}
                    </h1>
                    <p className="text-gray-500 text-sm mt-2">
                        {subject} • Class {className}
                    </p>
                </div>

                <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white shadow-lg w-full sm:w-auto"
                >
                    <Download size={18} />
                    Download Notes
                </button>
            </div>

            {/* ===== Main Layout ===== */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8 items-start">

                {/* ===== LEFT - Images ===== */}
                <div className="flex flex-col gap-6">

                    {[notesSample1, notesSample2].map((src, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg border border-orange-100 p-4"
                        >
                            <div className="w-full h-[400px] bg-orange-50 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Sample ${i + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== RIGHT - Details Panel ===== */}
                <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-7 lg:sticky lg:top-8 max-h-[90vh] flex flex-col">

                    {/* Seller */}
                    <div className="flex items-center gap-4 border-b border-orange-100 pb-4">
                        <img
                            src={seller.profilePicture}
                            alt={seller.fullName}
                            className="w-14 h-14 rounded-full object-cover border border-orange-400"
                        />
                        <div className="min-w-0">
                            <h3 className="font-semibold text-gray-800 truncate">
                                {seller.fullName}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">
                                {seller.email}
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 py-6">
                        <div className="flex items-center gap-2">
                            <FileText className="text-orange-500 w-4 h-4" />
                            {pagesCount} pages
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="text-orange-500 w-4 h-4" />
                            {viewsCount} views
                        </div>
                        <div className="flex items-center gap-2">
                            <Download className="text-orange-500 w-4 h-4" />
                            {totalDownloads} downloads
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="text-orange-500 w-4 h-4" />
                            {formattedDate}
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">Price</span>
                            <span className="text-3xl font-bold text-orange-600">
                                ₹{price}
                            </span>
                        </div>

                        <button
                            onClick={handleDownload}
                            className="w-full mt-5 py-3 rounded-xl bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition"
                        >
                            Get This Note
                        </button>
                    </div>

                    {/* About Section */}
                    <div className="flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            About This Note
                        </h2>

                        <div className="overflow-y-auto max-h-[200px] pr-2 text-sm text-gray-600 leading-relaxed">
                            {description}
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Reviews ===== */}
            <div className="max-w-7xl mx-auto mt-14 bg-white rounded-2xl shadow-lg border border-orange-100 p-6 md:p-8">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Star className="text-orange-500 w-5 h-5" />
                    Reviews
                </h2>

                {reviews?.length === 0 ? (
                    <p className="text-gray-400 text-sm">No reviews yet.</p>
                ) : (
                    <div className="space-y-5">
                        {reviews.map((r, i) => (
                            <div
                                key={i}
                                className="flex justify-between gap-4 border-b border-orange-100 pb-4"
                            >
                                <div className="min-w-0 flex-1">
                                    <p className="font-medium text-gray-800 truncate">
                                        {r.user}
                                    </p>
                                    <p className="text-sm text-gray-500 break-words">
                                        {r.comment}
                                    </p>
                                </div>

                                <span className="text-orange-500 font-semibold whitespace-nowrap">
                                    ⭐ {r.rating}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}

export default Page;
