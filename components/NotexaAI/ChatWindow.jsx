"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ close }) {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [fullscreen, setFullscreen] = useState(false);

    const sendMessage = async () => {

        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };

        setMessages((prev) => [...prev, userMessage]);

        setInput("");

        const res = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();

        const aiMessage = {
            role: "assistant",
            content: data.reply
        };

        setMessages((prev) => [...prev, aiMessage]);
    };

    return (
        <div
            className={`
      fixed z-50 bg-white shadow-xl flex flex-col
      bottom-6 right-6
      ${fullscreen
                    ? "w-full h-full right-0 bottom-0 rounded-none"
                    : "w-[350px] h-[500px] rounded-2xl"}
    `}
        >

            {/* Header */}
            <div className="bg-orange-500 text-white p-3 flex justify-between items-center">

                <h2 className="font-semibold">Notexa AI</h2>

                <div className="flex gap-2">

                    <button
                        onClick={() => setFullscreen(!fullscreen)}
                        className="text-sm"
                    >
                        ⛶
                    </button>

                    <button onClick={close}>✕</button>

                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">

                {messages.map((msg, i) => (
                    <MessageBubble key={i} msg={msg} />
                ))}

            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Notexa..."
                    className="flex-1 border rounded-lg px-3 py-2 outline-none"
                />

                <button
                    onClick={sendMessage}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-lg"
                >
                    Send
                </button>

            </div>

        </div>
    );
}