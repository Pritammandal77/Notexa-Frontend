"use client";

import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 
        text-white px-4 py-3 rounded-full shadow-lg transition"
            >
                Chat with NAI
            </button>

            {open && <ChatWindow close={() => setOpen(false)} />}
        </>
    );
}