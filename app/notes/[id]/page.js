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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-14 pt-18 px-6 md:px-16">
            {/* HEADER */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 drop-shadow-sm">
                        {title}
                    </h1>
                    <p className="text-gray-600 mt-1 text-sm">
                        {subject} • Class {className}
                    </p>
                </div>
                <button
                    onClick={handleDownload}
                    className="mt-4 md:mt-0 flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-xl shadow-md hover:bg-orange-600 hover:scale-[1.02] transition-all"
                >
                    <Download className="w-5 h-5" />
                    Download Notes
                </button>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT: Image Preview */}
                <div className="flex flex-col gap-5">
                    {[notesSample1, notesSample2].map((src, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={src}
                                alt={`Sample ${i + 1}`}
                                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Note Details */}
                <div className="bg-white/70 backdrop-blur-xl p-7 rounded-2xl border border-orange-200 shadow-lg">


                    {/* Seller Info */}
                    <div className="flex items-center gap-4 py-4 border-orange-100">
                        <img
                            src={seller.profilePicture}
                            alt={seller.fullName}
                            className="w-14 h-14 rounded-full border-2 border-orange-400"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">{seller.fullName}</h3>
                            <p className="text-sm text-gray-500">{seller.email}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
                        <p className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-orange-500" /> {pagesCount} pages
                        </p>
                        <p className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-orange-500" /> {viewsCount} views
                        </p>
                        <p className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-orange-500" /> {totalDownloads} downloads
                        </p>
                        <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-orange-500" /> {formattedDate}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700 font-medium">Price</p>
                            <p className="text-3xl font-bold text-orange-600">₹{price}</p>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl text-sm font-medium hover:bg-orange-600 transition-all shadow-md hover:scale-[1.02]"
                        >
                            Get This Note
                        </button>
                    </div>

                    <div className="flex flex-col pt-3">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            About this Note
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>

            {/* REVIEWS */}
            <div className="max-w-6xl mx-auto mt-16 bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-orange-200 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
                    <Star className="text-orange-500 w-5 h-5" /> Reviews
                </h2>
                {reviews?.length === 0 ? (
                    <p className="text-gray-500 text-sm">No reviews yet.</p>
                ) : (
                    <div className="space-y-4">
                        {reviews.map((r, i) => (
                            <div
                                key={i}
                                className="border-b border-orange-100 pb-3 flex justify-between items-start"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{r.user}</p>
                                    <p className="text-sm text-gray-500">{r.comment}</p>
                                </div>
                                <span className="text-orange-500 font-semibold text-sm">
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
