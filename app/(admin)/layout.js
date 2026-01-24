
"use client"

import Header from '@/components/Header';
import React from 'react';
import { usePathname, useRouter } from "next/navigation";

function AdminLayout({ children }) {

    const pathname = usePathname();
    const router = useRouter();

    const isPayout = pathname.includes("payout-requests");
    const isSupport = pathname.includes("support-requests");

    return (
        <>
            <Header />
            <div className="mt-16 w-full px-4 pt-5">
                {/* Tabs */}
                <div className="flex gap-6 rounded-xl bg-white p-3 shadow-md w-fit">
                    <button
                        onClick={() => router.push("/payout-requests")}
                        className={`rounded-lg px-5 py-2 text-lg font-semibold transitio
                            ${isPayout
                                ? "bg-orange-100 text-orange-600"
                                : "text-gray-600 hover:text-orange-500"
                            }`}
                    >
                        Payout Requests
                    </button>

                    <button
                        onClick={() => router.push("/support-requests")}
                        className={`rounded-lg px-5 py-2 text-lg font-semibold transition
                            ${isSupport
                                ? "bg-orange-100 text-orange-600"
                                : "text-gray-600 hover:text-orange-500"
                            }`}
                    >
                        Support Requests
                    </button>
                </div>

                <div className="mt-8">{children}</div>
            </div>
        </>
    );
}

export default AdminLayout;
