// import React from 'react';
// import { BookOpen, DollarSign, Search, Upload } from 'lucide-react';

// function Working() {
//     return (
//         <>
//             <div className='w-full h-auto'>

//                 <section className="w-full py-20">
//                     <div className="w-[90%] max-w-7xl mx-auto text-center">
//                         {/* Section Heading */}
//                         <h2 className="text-5xl font-bold mb-4 text-gray-900">How It <span className='text-orange-500'> Works ?</span></h2>
//                         <p className="text-gray-600 text-lg mb-16">
//                             Simple steps to share, discover, and earn from handwritten notes.
//                         </p>

//                         {/* Steps Grid */}
//                         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

//                             {/* Step 1 */}
//                             <div className="bg-[#e3f9fe] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300">
//                                 <div className="flex justify-center mb-6">
//                                     <div className="p-4 bg-blue-200 rounded-full">
//                                         <Upload size={35} className="text-[#2563EB]" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-2">Create personalized handwritten Notes</h3>
//                                 <p className="text-gray-600">
//                                     Write neat, organized notes in your own style — your clarity makes them valuable to others.
//                                 </p>
//                             </div>

//                             {/* Step 2 */}
//                             <div className="bg-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300">
//                                 <div className="flex justify-center mb-6">
//                                     <div className="p-4 bg-green-200 rounded-full">
//                                         <Search size={35} className="text-[#10B981]" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-2">Make PDF of your notes</h3>
//                                 <p className="text-gray-600">
//                                     Scan or capture your notes and convert them into clean, shareable PDFs.
//                                 </p>
//                             </div>

//                             {/* Step 3 */}
//                             <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300">
//                                 <div className="flex justify-center mb-6">
//                                     <div className="p-4 bg-yellow-100 rounded-full">
//                                         <DollarSign size={35} className="text-[#F59E0B]" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-2">List your notes</h3>
//                                 <p className="text-gray-600">
//                                     Upload your PDFs, set a price, and list them for students to discover and buy.
//                                 </p>
//                             </div>

//                             {/* Step 4 */}
//                             <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300">
//                                 <div className="flex justify-center mb-6">
//                                     <div className="p-4 bg-purple-200 rounded-full">
//                                         <BookOpen size={35} className="text-[#8B5CF6]" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-2">Earn money when a user buys your notes</h3>
//                                 <p className="text-gray-600">
//                                     Earn every time your notes sell - turn your effort into income while helping others.
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </section>

//             </div>
//         </>
//     );
// }

// export default Working;

"use client";
import React from "react";
import { Upload, Search, DollarSign, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

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
        <section className="relative bg-gradient-to-b from-orange-100 via-white to-orange-100 py-24 overflow-hidden">
            <div className="w-[90%] max-w-6xl mx-auto text-center mb-20">
                <h2 className="text-5xl font-bold text-gray-900">
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
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
