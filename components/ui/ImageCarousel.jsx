// "use client";

// import { IconArrowNarrowRight } from "@tabler/icons-react";
// import Image from "next/image";
// import { useState, useRef, useId, useEffect } from "react";
// import { useSelector } from "react-redux";

// // ✅ Single Note Card
// const Slide = ({ note, index, current, handleSlideClick }) => {
//     const slideRef = useRef(null);
//     const xRef = useRef(0);
//     const yRef = useRef(0);
//     const frameRef = useRef();

//     useEffect(() => {
//         const animate = () => {
//             if (!slideRef.current) return;
//             const x = xRef.current;
//             const y = yRef.current;
//             slideRef.current.style.setProperty("--x", `${x}px`);
//             slideRef.current.style.setProperty("--y", `${y}px`);
//             frameRef.current = requestAnimationFrame(animate);
//         };
//         frameRef.current = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(frameRef.current);
//     }, []);

//     const handleMouseMove = (event) => {
//         const el = slideRef.current;
//         if (!el) return;
//         const r = el.getBoundingClientRect();
//         xRef.current = event.clientX - (r.left + r.width / 2);
//         yRef.current = event.clientY - (r.top + r.height / 2);
//     };

//     const handleMouseLeave = () => {
//         xRef.current = 0;
//         yRef.current = 0;
//     };

//     if (!note) return null;

//     const { title, description, notesSample1, subject, price, seller } = note;

//     return (
//         <li
//             ref={slideRef}
//             onClick={() => handleSlideClick(index)}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className="relative flex flex-col items-center justify-start text-left text-gray-900 bg-white shadow-lg rounded-2xl w-[70vmin] xl:w-[28vw] h-[65vh] mx-[2vmin] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
//         >
//             {/* Image */}
//             <div className="w-full h-2/3 overflow-hidden rounded-xl mb-3">
//                 <Image
//                     src={note.notesSample1.replace(/^http:\/\//, 'https://')}
//                     alt={title || "note image"}
//                     width={500}
//                     height={300}
//                     className="w-[90%] mx-auto h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
//                 />
//             </div>

//             {/* Info */}
//             <div className="flex flex-col gap-1 px-2">
//                 <h3 className="text-lg font-semibold truncate">{title}</h3>
//                 <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                     <span className="font-medium">Subject:</span> {subject}
//                 </p>
//                 <p className="text-xs text-gray-500">
//                     <span className="font-medium">Seller:</span> {seller?.fullName}
//                 </p>
//                 <p className="text-md font-semibold text-orange-600 mt-1">
//                     ₹{price}
//                 </p>
//             </div>

//             {/* Read More Button */}
//             <button className="mt-3 px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-xl hover:bg-orange-600 transition duration-200">
//                 Read More
//             </button>
//         </li>
//     );
// };

// // ✅ Control Buttons
// const CarouselControl = ({ type, title, handleClick }) => (
//     <button
//         className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
//             }`}
//         title={title}
//         onClick={handleClick}
//     >
//         <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
//     </button>
// );

// // ✅ Main Carousel Component
// export function Carousel() {
//     const allNotes = useSelector((state) => state.notes.allNotes);
//     const [current, setCurrent] = useState(0);
//     const id = useId();

//     const handlePreviousClick = () => {
//         setCurrent((prev) => (prev - 1 < 0 ? allNotes.length - 1 : prev - 1));
//     };

//     const handleNextClick = () => {
//         setCurrent((prev) => (prev + 1 === allNotes.length ? 0 : prev + 1));
//     };

//     const handleSlideClick = (index) => {
//         setCurrent(index);
//     };

//     if (!allNotes || allNotes.length === 0) {
//         return <p className="text-center py-10 text-gray-500">No notes found.</p>;
//     }

//     return (
//         <div
//             className="relative w-full max-w-[85vw] mx-auto overflow-hidden py-10"
//             aria-labelledby={`carousel-heading-${id}`}
//         >
//             {/* Cards */}
//             <ul
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{
//                     transform: `translateX(-${current * 32}vw)`,
//                 }}
//             >
//                 {allNotes.map((note, index) => (
//                     <Slide
//                         key={note._id || index}
//                         note={note}
//                         index={index}
//                         current={current}
//                         handleSlideClick={handleSlideClick}
//                     />
//                 ))}
//             </ul>

//             {/* Controls */}
//             <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
//                 <CarouselControl
//                     type="previous"
//                     title="Go to previous slide"
//                     handleClick={handlePreviousClick}
//                 />
//                 <CarouselControl
//                     type="next"
//                     title="Go to next slide"
//                     handleClick={handleNextClick}
//                 />
//             </div>
//         </div>
//     );
// }

"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useRef, useId, useEffect } from "react";
import { useSelector } from "react-redux";

// ✅ Single Slide
const Slide = ({ note, index, current, handleSlideClick }) => {
    const slideRef = useRef(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;
            const x = xRef.current;
            const y = yRef.current;
            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);
            frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, []);

    const handleMouseMove = (e) => {
        const el = slideRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        xRef.current = e.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = e.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    if (!note) return null;

    const { title, description, notesSample1, subject, price, seller } = note;
    const imageSrc = notesSample1?.replace(/^http:\/\//, "https://");

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl p-4 bg-white duration-300 ease-in-out w-[70vmin] xl:w-[27vw] h-[70vmin] xl:h-[60vh] mx-[4vmin] cursor-pointer"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.96) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className="absolute top-0 left-0 p-3 w-full h-full bg-white rounded-[10%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)"
                                : "none",
                    }}
                >

                    <div className="w-full h-[50%] overflow-hidden rounded-xl">
                        <Image
                            src={imageSrc}
                            alt={title || "note image"}
                            width={500}
                            height={100}
                            className="w-[100%] h-[100%] mx-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="px-2">
                            <h2 className="text-xl md:text-3xl font-semibold mb-2 text-orange-500">{title}</h2>
                            <p className="text-[16px] text-gray-700 mt-2">
                                <span className="font-medium">Subject:</span> {subject}
                            </p>
                            <p className="text-[16px] text-gray-700">
                                <span className="font-medium">Seller:</span> {seller?.fullName}
                            </p>
                            <p className="text-xl font-semibold text-orange-400 mt-2">
                                @just ₹{price}
                            </p>
                        </div> 
                        <div className="flex justify-center">
                            <button className="w-full px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition">
                                Read More
                            </button>
                        </div>
                    </div>


                    {/* {current === index && (
                        <div className="absolute inset-0 bg-black/40 transition-all duration-700" />
                    )} */}
                </div>



            </li>
        </div>
    );
};

// ✅ Carousel Controls
const CarouselControl = ({ type, title, handleClick }) => (
    <button
        className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
            }`}
        title={title}
        onClick={handleClick}
    >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
);

// ✅ Main Carousel Component
export function Carousel() {
    const allNotes = useSelector((state) => state.notes.allNotes);
    const [current, setCurrent] = useState(1);
    const id = useId();

    const handlePreviousClick = () => {
        setCurrent((prev) => (prev - 1 < 0 ? allNotes.length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setCurrent((prev) => (prev + 1 === allNotes.length ? 0 : prev + 1));
    };

    const handleSlideClick = (index) => {
        setCurrent(index);
    };

    if (!allNotes || allNotes.length === 0) {
        return <p className="text-center py-10 text-gray-500">No notes found.</p>;
    }

    return (
        <div
            className="relative w-[70vmin] h-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
        >
            <ul
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / allNotes.length)}%)`,
                }}
            >
                {allNotes.map((note, index) => (
                    <Slide
                        key={note._id || index}
                        note={note}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </ul>

            {/* Prev / Next Buttons */}
            <div className="absolute flex justify-center w-full bottom-0">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />
                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}
