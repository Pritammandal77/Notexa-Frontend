"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import NotesCardSkeleton from "../SkeletonLoaders/NotesCardSkeleton";

export function Carousel() {
    const allNotes = useSelector((state) => state.notes.allNotes);

    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentX = useRef(0);
    const velocity = useRef(0);
    let raf;

    if (!allNotes || allNotes.length === 0) {
        return (
            <>
                <div className="flex gap-6 px-3 xl:px-5">
                    <NotesCardSkeleton />
                    <NotesCardSkeleton />
                    <NotesCardSkeleton />
                    <NotesCardSkeleton />
                </div>
            </>
        );
    }


    const scroll = (dir) => {
        const c = containerRef.current;
        c.scrollTo({
            left: c.scrollLeft + (dir === "left" ? -400 : 400),
            behavior: "smooth",
        });
    };

    const onDown = (e) => {
        isDragging.current = true;
        cancelAnimationFrame(raf);

        startX.current = (e.touches?.[0]?.clientX ?? e.clientX);
        currentX.current = startX.current;

        const c = containerRef.current;
        c.style.cursor = "grabbing";
    };

    const onMove = (e) => {
        if (!isDragging.current) return;

        const c = containerRef.current;
        const x = (e.touches?.[0]?.clientX ?? e.clientX);

        const delta = currentX.current - x;
        currentX.current = x;

        c.scrollLeft += delta;

        velocity.current = delta; // track momentum
    };

    const onUp = () => {
        isDragging.current = false;
        const c = containerRef.current;
        c.style.cursor = "grab";

        const momentum = () => {
            if (Math.abs(velocity.current) < 0.2) return;

            c.scrollLeft += velocity.current;
            velocity.current *= 0.95;

            raf = requestAnimationFrame(momentum);
        };

        momentum();
    };

    return (
        <div className="relative w-full py-6">
            <button
                className="absolute left-0 xl:left-3 top-1/2 -translate-y-1/2 z-10 bg-orange-100 shadow-lg p-1 xl:p-2 rounded-full cursor-pointer"
                onClick={() => scroll("left")}
            >
                <IconArrowNarrowRight className="rotate-180" />
            </button>

            <button
                className="absolute right-0 xl:right-3 top-1/2 -translate-y-1/2 z-10 bg-orange-100 shadow-lg p-1 xl:p-2 rounded-full cursor-pointer"
                onClick={() => scroll("right")}
            >
                <IconArrowNarrowRight />
            </button>

            <div
                ref={containerRef}
                className="flex gap-4 xl:gap-6 px-4 xl:px-14 hide-scrollbar select-none"
                style={{
                    overflowX: "hidden",
                    cursor: "grab",
                    userSelect: "none",
                }}
                onMouseDown={onDown}
                onMouseMove={onMove}
                onMouseUp={onUp}
                onMouseLeave={onUp}
                onTouchStart={onDown}
                onTouchMove={onMove}
                onTouchEnd={onUp}
            >
                {
                    allNotes.map((note) => {
                        const imageSrc = note.notesSample1?.replace(/^http:\/\//, "https://");

                        return (
                            <div
                                key={note._id}
                                className="min-w-[350px] bg-white border border-orange-100 rounded-xl shadow-md p-3 flex-shrink-0"
                            >
                                <div className="w-full h-40 overflow-hidden rounded-lg">
                                    <Image
                                        src={imageSrc}
                                        width={400}
                                        height={240}
                                        alt={note.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h2 className="text-2xl font-bold mt-3 text-orange-500">
                                    {note.title}
                                </h2>

                                <p className="text-md text-gray-600">Subject: {note.subject}</p>
                                <p className="text-md text-gray-600">
                                    Seller: {note?.seller?.fullName}
                                </p>

                                <p className="font-bold text-orange-600 mt-2 text-2xl">₹{note.price}</p>

                                <Link href={`/notes/${note._id}`}>
                                    <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg cursor-pointer">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
