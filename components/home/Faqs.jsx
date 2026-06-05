"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';

function Faqs() {

    const faqData = [
        {
            title: "What is Notexa?",
            content:
                "Notexa is a platform where students and professionals can buy and sell handwritten or hand-typed notes at an affordable price. Every note is available for just ₹29, making quality study material easily accessible for everyone.",
        },
        {
            title: "How does selling notes work on Notexa?",
            content:
                "Any user can upload and sell their notes on Notexa. Once your notes are approved and published, you earn 70% of ₹29 for every single download. It's a simple way to share your knowledge and make money at the same time.",
        },
        {
            title: "Can anyone upload notes on Notexa?",
            content:
                "Yes! Any student or professional can upload their handwritten or typed notes. Just make sure your notes are clear, original, and valuable to other learners.",
        },
        {
            title: "Are there refunds available after purchasing notes?",
            content:
                "No. Since notes are digital downloadable products, Notexa does not provide refunds after the purchase is completed. Please review the note details carefully before buying.",
        },
        {
            title: "How much can I earn by selling notes?",
            content:
                "You earn 70% of the note price (₹29) per download. That means for every download, you receive ₹20.3 directly into your Notexa earnings account. With multiple downloads, your income grows automatically.",
        },
        {
            title: "Why are all notes priced at just ₹29?",
            content:
                "₹29 is chosen to ensure affordability for students while still giving sellers a fair earning. This fixed pricing keeps the platform simple, transparent, and budget-friendly.",
        },
        {
            title: "What type of notes can I upload?",
            content:
                "You can upload handwritten notes, typed notes, PDF study materials, summaries, exam preparation guides, or subject-specific explanations. As long as the content is original and helpful, it's allowed.",
        },
        {
            title: "Is Notexa only for college students?",
            content:
                "No. Notexa is for everyone — school students, college students, competitive exam aspirants, and working professionals who want to learn or share knowledge.",
        },
        {
            title: "How do buyers receive their purchased notes?",
            content:
                "After payment, the notes become instantly downloadable from the user’s dashboard. Buyers can access and download them anytime.",
        },
    ];

    // Reusable view settings to trigger the animation every time it's scrolled into view
    const viewConfig = { once: false, amount: 0.1 };

    return (
        <>
            <div className='flex flex-col items-center justify-center py-20 p-4 transition-colors duration-500 rounded-t-[140px] bg-gradient-to-b from-[#fff8f4] to-orange-100'>
                <div className='w-full max-w-4xl mx-auto'>
                    
                    {/* Header Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewConfig}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className='text-4xl xl:text-5xl font-extrabold text-black text-center mb-2'>
                            Frequently Asked {" "}
                            <span className='text-orange-500'>
                                 Questions
                            </span>
                        </h1>
                        <p className='text-gray-800  text-center mb-10'>
                            Here are the answers of the quetions you might have
                        </p>
                    </motion.div>

                    {/* Accordion Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewConfig}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        {/* Here we use the reusable component with our data */}
                        <Accordion items={faqData} />
                    </motion.div>

                </div>
            </div>
        </>
    );
}

export default Faqs;

