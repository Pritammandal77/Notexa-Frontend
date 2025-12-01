"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
    testimonials = [],
    autoplay = false,
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        if (testimonials.length > 0) {
            setActive((prev) => (prev + 1) % testimonials.length);
        }
    };

    const handlePrev = () => {
        if (testimonials.length > 0) {
            setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    const isActive = (index) => index === active;

    useEffect(() => {
        if (autoplay && testimonials.length > 1) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, testimonials.length]);

    const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

    if (!Array.isArray(testimonials) || testimonials.length === 0) {
        return (
            <div className="text-center text-gray-500 dark:text-neutral-400 py-10">
                No testimonials available.
            </div>
        );
    }

    const activeTestimonial = testimonials[active];

    return (
        <div className="mx-auto flex flex-col gap-15 max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-extrabold font-playfair text-gray-800 leading-tight">
                    What Our <span className="text-orange-500">Users</span> Say
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Hear from people who love using Notexa.
                </p>
            </div>
            <div className="relative grid grid-cols-1 gap-8 xl:gap-20 md:grid-cols-2">
                {/* Image Section */}
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src || index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold text-black ">
                            {activeTestimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500 ">
                            {activeTestimonial.designation}
                        </p>
                        <motion.p className="mt-4 xl:mt-8 text-lg text-gray-500 ">
                            {activeTestimonial.quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-6 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                        >
                            <IconArrowLeft className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                        >
                            <IconArrowRight className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 👇 Example Usage
export default function TestimonialsSection() {
    const testimonialsData = [
        {
            src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=80",
            name: "Pritam Mandal",
            designation: "Frontend Developer",
            quote:
                "Working with modern tools like React and Framer Motion has been a game changer for creating beautiful, dynamic interfaces.",
        },
        {
            src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=80",
            name: "Hitesh Choudhary",
            designation: "Educator & YouTuber",
            quote:
                "I love how this testimonial component brings personality and smooth motion together. It feels alive!",
        },
        {
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=80",
            name: "Emma Watson",
            designation: "UI/UX Designer",
            quote:
                "The transitions are so clean and minimal — perfect for modern portfolios and product showcases.",
        },
    ];

    return <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />;
}
