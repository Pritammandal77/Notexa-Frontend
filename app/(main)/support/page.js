"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

function page() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // later: API call / email / database
        alert("Support request submitted successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 mt-16 px-4 py-16">
                <div className="mx-auto max-w-3xl">
                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Need Help?{" "}
                            <span className="text-orange-500">Contact Support</span>
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Facing any issue or have a complaint?
                            Fill the form below and I will get back to you.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            {/* Name & Email */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Issue with notes / payment / account"
                                    required
                                    className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Describe your problem or complaint..."
                                    required
                                    className="w-full resize-none rounded-lg border border-gray-400 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
                                >
                                    Submit Support Request
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Footer Text */}
                    <p className="mt-8 text-center text-md text-gray-500">
                        We usually respond within <span className="font-medium text-orange-600">24 hours</span>.
                    </p>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919881228004?text=Hello,%20I%20need%20support%20regarding%20Notexa"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:bg-green-600 hover:scale-105"
            >
                <FaWhatsapp size={22} />
                <span className="hidden sm:block font-medium">
                    Chat with Admin
                </span>
            </a>

        </>
    );
}

export default page;
