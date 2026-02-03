"use client";

import { fetchAllUsers } from "@/utils/adminApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Page() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const res = await fetchAllUsers();
                setAllUsers(res.data.data || []);
            } catch (error) {
                toast.error("Something went wrong while fetching users");
            }
        };

        getAllUsers();
    }, []);

    return (
        <div className="min-h-screen max-w-5xl mx-auto px-2 xl:px-20 xl:py-6 ">
            {/* Header */}
            <div className="mb-3 ">
                <h2 className="text-3xl md:text-4xl font-bold">
                    All <span className="text-orange-500">Users </span>
                </h2>
                <p className="text-sm text-orange-400">
                    Total Users: {allUsers.length}
                </p>
            </div>

            {/* Users List */}
            <div className="space-y-4">
                {allUsers.map((user) => (
                    <div
                        key={user._id}
                        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                    >

                        {/* Left */}
                        <div className="flex items-center gap-4">
                            <img
                                src={user.profilePicture}
                                alt={user.fullName}
                                className="w-14 h-14 rounded-full border border-orange-300 object-cover"
                            />

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    {user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {user.email}
                                </p>
                                <p className="text-xs text-orange-500 capitalize">
                                    Role: {user.role}
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-auto">
                            <Link href={`/profile/${user._id}`}>
                                <button
                                    className="w-full md:w-auto px-4 py-2 text-sm rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                                >
                                    Visit Profile
                                </button>
                            </Link>
                        </div>

                    </div>
                ))}

                {allUsers.length === 0 && (
                    <p className="text-center text-gray-500">
                        No users found
                    </p>
                )}
            </div>
        </div>
    );
}

export default Page;
