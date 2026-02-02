"use client";
import React from "react";
import { Upload, Search, DollarSign, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/utils/MotionWrapper";

const steps = [
    {
        id: 1,
        title: "Create Personalized Notes",
        desc: "Write neat, organized notes in your own style — your clarity makes them valuable to others.",
        icon: Upload,
    },
    {
        id: 2,
        title: "Make PDF of Your Notes",
        desc: "Scan or capture your notes and convert them into clean, shareable PDFs.",
        icon: Search,
    },
    {
        id: 3,
        title: "List Your Notes",
        desc: "Upload your PDFs, set a price, and list them for students to discover and buy.",
        icon: DollarSign,
    },
    {
        id: 4,
        title: "Earn Money on Every Sale",
        desc: "Earn every time your notes sell — turn your effort into income while helping others.",
        icon: BookOpen,
    },
];

export default function Working() {
    return (
        <section id="working" className="relative bg-gradient-to-b from-orange-100 via-white to-orange-100 py-24 overflow-hidden">
            <div className="w-[90%] max-w-6xl mx-auto text-center mb-20">
                <h2 className="text-4xl font-bold text-gray-900">
                    How It <span className="text-orange-500">Works?</span>
                </h2>
                <p className="text-gray-600 text-lg mt-3">
                    Step-by-step process to create, upload, and earn from your handwritten notes.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-orange-400 rounded-full md:block hidden"></div>

                {/* Mobile left line */}
                <div className="absolute left-5 top-0 h-full w-[2px] bg-orange-400 rounded-full md:hidden block"></div>

                <div className="flex flex-col gap-4 xl:gap-0 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLeft = index % 2 === 0;
                        return (
                            <MotionWrapper key={step.id} fromBottom={30}>
                                <div
                                    className={`flex items-center md:justify-between relative ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >

                                    {/* Connector dot */}
                                    <div
                                        className={`absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 left-[10px] md:w-6 md:h-6 w-4 h-4 bg-orange-500 border-[4px] border-white rounded-full shadow-md`}
                                    ></div>

                                    {/* Step Card */}
                                    <div
                                        className={`bg-white shadow-xl rounded-2xl p-8 w-[90%] md:w-[45%] border relative right-2 border-orange-100 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ${isLeft
                                            ? "md:pr-10 md:text-right md:ml-0 ml-10"
                                            : "md:pl-10 md:text-left ml-10"
                                            }`}
                                    >
                                        <div
                                            className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""
                                                }`}
                                        >
                                            <div className="p-3 px-4 bg-orange-100 font-bold rounded-full text-orange-600 shadow-inner">
                                                Step {step.id}
                                                {/* <Icon size={26} /> */}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-[1.05rem]">
                                            {step.desc}
                                        </p>
                                        <p
                                            className={`mt-4 font-semibold text-orange-500 ${isLeft ? "md:text-right" : "md:text-left"
                                                }`}
                                        >
                                        </p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}
