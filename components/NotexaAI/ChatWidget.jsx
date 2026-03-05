"use client";

import { useState } from "react";
import ChatWindow from "./ChatWindow";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-3 right-3 md:bottom-6 md:right-6 flex items-center justify-center font-semibold gap-2 z-50 bg-orange-500 hover:bg-orange-600 
        text-white px-4 py-3 rounded-full shadow-lg transition"
            >
                {/* Chat with NAI */}
                <MessageCircle size={20} />
                <span>Chat</span>
            </button>

            {open && <ChatWindow close={() => setOpen(false)} />}
        </>
    );
}