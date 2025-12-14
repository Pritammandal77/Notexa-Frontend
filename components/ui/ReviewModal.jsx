import React from 'react';
import { X, Star } from "lucide-react";
import { useState } from "react";
import { AddReview } from '@/utils/notesApi';

function ReviewModal({ open, onClose, notesId }) {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmitReview = async () => {
        console.log({ rating, review });
        await AddReview(rating, review, notesId)
        onClose();
    }

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                {/* Modal */}
                <div
                    className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-xl
        animate-[fadeScale_0.25s_ease-out]"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-orange-600">
                            Add Your Review
                        </h2>
                        <button onClick={onClose}>
                            <X className="text-gray-500 hover:text-red-500" />
                        </button>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={28}
                                onClick={() => setRating(star)}
                                className={`cursor-pointer transition ${star <= rating
                                    ? "fill-orange-400 text-orange-400"
                                    : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Review Input */}
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your review..."
                        className="w-full h-28 border border-orange-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />

                    {/* Submit */}
                    <button
                        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
                        onClick={() => handleSubmitReview()}
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </>
    );
}

export default ReviewModal;
