// "use client";

// import { Sparkles, CheckCircle } from "lucide-react";
// import Link from "next/link";

// function Hero() {
//     return (
//         <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center relative overflow-hidden">

//             {/* CONTENT */}
//             <div className="w-full px-4 xl:w-[80vw] z-10 
//                 flex flex-col items-center text-center
//                 pt-28 pb-32 md:pt-36 md:pb-40">

//                 {/* Badge */}
//                 <span className="flex items-center gap-2 text-sm font-medium bg-orange-100 text-orange-800 px-4 py-1 rounded-full mb-5">
//                     <Sparkles size={15} />
//                     Notexa – Handwritten Notes Hub
//                 </span>

//                 {/* Heading */}
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                     Find Quality{" "}
//                     <span className="text-orange-400">Handwritten</span>{" "}
//                     <span className="text-orange-400">Notes</span>
//                     <br />
//                     Made by Students, For Students
//                 </h1>

//                 {/* Sub text */}
//                 <p className="text-lg md:text-xl text-[#222] mt-6 max-w-3xl">
//                     Access clean, well-structured handwritten notes for exams,
//                     revisions, and last-minute prep — created by real students
//                     who’ve already studied the same topics.
//                 </p>

//                 {/* CTA */}
//                 <div className="flex flex-wrap justify-center gap-5 mt-8">
//                     <Link href="/allnotes">
//                         <button className="px-7 py-3 cursor-pointer bg-[#ff7a1f] text-white font-semibold rounded-lg hover:bg-[#ff9340] transition shadow-md">
//                             Explore Notes
//                         </button>
//                     </Link>

//                     <Link href="/about/#working">
//                         <button className="px-7 py-3 cursor-pointer bg-white text-[#ff7a1f] font-semibold rounded-lg border border-orange-300 hover:bg-orange-50 transition">
//                             How it works
//                         </button>
//                     </Link>
//                 </div>

//                 {/* TRUST STATS */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">
//                     <div>
//                         <p className="text-3xl font-bold text-orange-400">100+</p>
//                         <p className="text-sm text-gray-600">Handwritten Notes</p>
//                     </div>
//                     <div>
//                         <p className="text-3xl font-bold text-orange-400">5K+</p>
//                         <p className="text-sm text-gray-600">Students</p>
//                     </div>
//                     <div>
//                         <p className="text-3xl font-bold text-orange-400">20+</p>
//                         <p className="text-sm text-gray-600">Subjects</p>
//                     </div>
//                     <div>
//                         <p className="text-3xl font-bold text-orange-400">100%</p>
//                         <p className="text-sm text-gray-600">Student-Made</p>
//                     </div>
//                 </div>

//                 {/* WHY NOTEXA */}
//                 <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl">
//                     {[
//                         "Verified & neatly written notes",
//                         "Perfect for exams & quick revision",
//                         "Notes from real college students",
//                     ].map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-4 rounded-xl shadow-sm"
//                         >
//                             <CheckCircle className="text-orange-400" size={22} />
//                             <p className="text-sm text-gray-700">{item}</p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* SOCIAL PROOF */}
//                 <p className="mt-10 text-sm font-semibold bg-orange-100 text-orange-800 px-4 py-1 rounded-full">
//                     Trusted by students from multiple colleges across India
//                 </p>
//             </div>

//             {/* BACKGROUND */}
//             <div
//                 className="absolute inset-0 z-0"
//                 style={{
//                     background: "#fff8f3",
//                     backgroundImage: `
//                         linear-gradient(to right, rgba(255,165,0,0.15) 0.5px, transparent 0.2px),
//                         linear-gradient(to bottom, rgba(255,165,0,0.15) 0.5px, transparent 0.2px),
//                         radial-gradient(circle at 50% 50%, rgba(255,140,0,0.15) 0%, rgba(255,140,0,0.05) 35%, transparent 90%)
//                     `,
//                     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
//                 }}
//             />
//         </div>
//     );
// }

// export default Hero;




"use client";

import { Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
    // Reusable animation variants for staggered elements
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center relative overflow-hidden">

            {/* CONTENT */}
            <div className="w-full px-4 xl:w-[80vw] z-10 
                flex flex-col items-center text-center
                pt-28 pb-32 md:pt-36 md:pb-40">

                {/* Badge */}
                <motion.span 
                    {...fadeInUp}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 text-sm font-medium bg-orange-100 text-orange-800 px-4 py-1 rounded-full mb-5"
                >
                    <Sparkles size={15} />
                    Notexa – Handwritten Notes Hub
                </motion.span>

                {/* Heading */}
                <motion.h1 
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                    Find Quality{" "}
                    <span className="text-orange-400">Handwritten</span>{" "}
                    <span className="text-orange-400">Notes</span>
                    <br />
                    Made by Students, For Students
                </motion.h1>

                {/* Sub text */}
                <motion.p 
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-[#222] mt-6 max-w-3xl"
                >
                    Access clean, well-structured handwritten notes for exams,
                    revisions, and last-minute prep — created by real students
                    who’ve already studied the same topics.
                </motion.p>

                {/* CTA */}
                <motion.div 
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-5 mt-8"
                >
                    <Link href="/allnotes">
                        <button className="px-7 py-3 cursor-pointer bg-[#ff7a1f] text-white font-semibold rounded-lg hover:bg-[#ff9340] transition shadow-md">
                            Explore Notes
                        </button>
                    </Link>

                    <Link href="/about/#working">
                        <button className="px-7 py-3 cursor-pointer bg-white text-[#ff7a1f] font-semibold rounded-lg border border-orange-300 hover:bg-orange-50 transition">
                            How it works
                        </button>
                    </Link>
                </motion.div>

                {/* TRUST STATS */}
                <motion.div 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        initial: {},
                        whileInView: {
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center"
                >
                    {[
                        { value: "100+", label: "Handwritten Notes" },
                        { value: "5K+", label: "Students" },
                        { value: "20+", label: "Subjects" },
                        { value: "100%", label: "Student-Made" }
                    ].map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* WHY NOTEXA */}
                <motion.div 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        initial: {},
                        whileInView: {
                            transition: { staggerChildren: 0.12 }
                        }
                    }}
                    className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl"
                >
                    {[
                        "Verified & neatly written notes",
                        "Perfect for exams & quick revision",
                        "Notes from real college students",
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                initial: { opacity: 0, scale: 0.95, y: 15 },
                                whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-4 rounded-xl shadow-sm"
                        >
                            <CheckCircle className="text-orange-400" size={22} />
                            <p className="text-sm text-gray-700">{item}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SOCIAL PROOF */}
                <motion.p 
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="mt-10 text-sm font-semibold bg-orange-100 text-orange-800 px-4 py-1 rounded-full"
                >
                    Trusted by students from multiple colleges across India
                </motion.p>
            </div>

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#fff8f3",
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,165,0,0.15) 0.5px, transparent 0.2px),
                        linear-gradient(to bottom, rgba(255,165,0,0.15) 0.5px, transparent 0.2px),
                        radial-gradient(circle at 50% 50%, rgba(255,140,0,0.15) 0%, rgba(255,140,0,0.05) 35%, transparent 90%)
                    `,
                    backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                }}
            />
        </div>
    );
}

export default Hero;