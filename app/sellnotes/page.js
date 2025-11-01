"use client"
import React, { useState } from 'react';
import { toast } from 'sonner';

function page() {
    const [sampleImages, setSampleImages] = useState([]);

    const handleSampleChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setSampleImages(previews);
    };

    const handleNotesFileSize = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = [
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            ];

            const maxSize = 25 * 1024 * 1024; // 25 MB

            if (!allowedTypes.includes(file.type)) {
                toast.error("Please upload only PDF, DOCX, DOC, or PPTX files.");
                e.target.value = null;
                return;
            }

            if (file.size > maxSize) {
                toast.error("File size exceeds 25 MB. Please upload a smaller file.");
                e.target.value = null;
            }
        }
    }

    return (
        <>
            <div className="min-h-screen pt-20 bg-gradient-to-b from-orange-50 to-orange-100 py-10 px-4 flex justify-center">
                <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-3 md:p-8 border border-orange-200">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">
                        Upload Your Notes
                    </h1>
                    <p className="text-gray-600 text-center mb-8 text-sm">
                        Share your handwritten or digital notes with learners across India.
                        Fill in the details below carefully before submitting.
                    </p>

                    {/* Form */}
                    <form className="space-y-5">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Notes Title
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. DBMS Unit 3 Notes"
                                className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                placeholder="Write a short description..."
                                className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none h-24 resize-none"
                            ></textarea>
                        </div>

                        {/* Page Count */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Number of Pages
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 24"
                                className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            />
                        </div>

                        {/* Sample Images */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Notes Sample (Upload 2 images)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleSampleChange}
                                className="w-full border border-orange-200 p-2 rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition"
                            />
                            {/* Preview */}
                            {sampleImages.length > 0 && (
                                <div className="mt-3 flex gap-3 flex-wrap">
                                    {sampleImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`sample-${i}`}
                                            className="w-24 h-24 object-cover rounded-lg border border-orange-200 shadow-sm"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* PDF Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Upload Notes File (PDF, DOCX, DOC, PPTX) — less than 25 MB
                            </label>
                            <input
                                type="file"
                                accept=".pdf, .docx, .doc, .pptx"
                                onChange={(e) => handleNotesFileSize(e)}
                                className="w-full border border-orange-200 p-2 rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="button"
                            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
                        >
                            Upload Notes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default page;
