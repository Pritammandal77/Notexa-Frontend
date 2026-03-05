"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { axiosInstance } from "@/utils/axiosInstance";
import { Minimize, Scan, X } from "lucide-react";

export default function ChatWindow({ close }) {

    const [messages, setMessages] = useState(null);
    const [input, setInput] = useState("");
    const [fullscreen, setFullscreen] = useState(false);

    const sendMessage = async () => {

        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };

        setMessages((prev) => [...prev, userMessage]);

        setInput("");

        try {
            const res = await axiosInstance.post(
                "/api/v1/rag/chat",
                { message: input }
            );

            const aiMessage = {
                role: "assistant",
                content: res.data.reply
            };

            setMessages((prev) => [...prev, aiMessage]);

        } catch (error) {

            const errorMessage = {
                role: "assistant",
                content: "Sorry, something went wrong."
            };

            setMessages((prev) => [...prev, errorMessage]);

            console.error(error);

        }
    };

    return (
        <div
            className={`
      fixed z-50 bg-white  flex flex-col
      ${fullscreen ? "w-full h-full right-0 bottom-0 rounded-none " : "shadow-2xl bottom-3 right-3 md:bottom-6 md:right-6 w-[350px] h-[500px] rounded-2xl"} `}
        >

            {/* Header */}
            <div className={`bg-orange-500 text-white p-4 flex justify-between items-center text-[18px]
                ${fullscreen ? " " : "rounded-t-2xl"}`}>

                <h2 className="font-semibold">Notexa AI</h2>

                <div className="flex gap-5">

                    <button
                        onClick={() => setFullscreen(!fullscreen)}
                        className="text-sm"
                    >
                        {
                            fullscreen ?
                                <Minimize size={24} />
                                :
                                <Scan size={24} />
                        }
                    </button>

                    <button onClick={close}>
                        <X size={24} />
                    </button>

                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">

                {
                    messages ? (
                        messages.map((msg, i) => (
                            <MessageBubble key={i} msg={msg} />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center w-full h-full px-6">

                            <h1 className="text-lg font-semibold text-gray-800">
                                Welcome to Notexa AI
                            </h1>

                            <p className="text-sm text-gray-500 mt-2">
                                Ask anything about Notexa, buying or selling notes, pricing, or how the platform works.
                            </p>

                        </div>
                    )
                }

            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-300 flex gap-2">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
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