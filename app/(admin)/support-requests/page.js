// "use client"
// import { fetchAllSupports } from '@/utils/supportApi';
// import React, { useEffect, useState } from 'react';
// import { toast } from 'sonner';

// function page() {
//     const [supportRequests, setSupportRequests] = useState(null)

//     useEffect(() => {
//         const fetchSupportRequests = async () => {
//             try {
//                 const res = await fetchAllSupports();
//                 setSupportRequests(res?.data.data)
//                 console.log(res)
//             } catch (error) {
//                 toast.error("Error while fetching support requests")
//             }
//         }

//         fetchSupportRequests();
//     }, []);

//     return (
//         <>
//             <div className="min-h-screen px-6 xl:px-20 xl:py-6 ">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-10">
//                     <span className="text-orange-500">Withdraw</span> Requests
//                 </h2>
//             </div>
//         </>
//     );
// }

// export default page;


"use client";
import { fetchAllSupports } from "@/utils/supportApi";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Page() {
    const [supportRequests, setSupportRequests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSupport, setSelectedSupport] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchSupportRequests = async () => {
            try {
                const res = await fetchAllSupports();
                setSupportRequests(res?.data?.data || []);
            } catch (error) {
                toast.error("Error while fetching support requests");
            }
        };

        fetchSupportRequests();
    }, []);

    const openModal = (support) => {
        setSelectedSupport(support);
        setStatus(support.status);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSupport(null);
    };

    const handleStatusChange = () => {
        // 🔥 here you will call UPDATE STATUS API later
        toast.success(`Status changed to "${status}"`);
        closeModal();
    };

    return (
        <>
            <div className="min-h-screen px-2 xl:px-20 xl:py-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    <span className="text-orange-500">Support</span> Requests
                </h2>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {supportRequests.map((item) => (
                        <div
                            key={item._id}
                            className="rounded-2xl bg-white p-6 shadow-md border border-orange-100"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {item.user?.profilePicture ? (
                                    <img
                                        src={item.user.profilePicture}
                                        alt="user"
                                        className="h-10 w-10 rounded-full"
                                    />
                                ) : (
                                    <div className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-600">
                                        {item.fullName[0]}
                                    </div>
                                )}

                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {item.fullName}
                                    </p>
                                    <p className="text-sm text-gray-500">{item.email}</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <p className="text-sm text-gray-500">Subject</p>
                                <p className="font-medium text-gray-800">{item.subject}</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-500">Message</p>
                                <p className="text-gray-700 line-clamp-3">{item.message}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium
                    ${item.status === "open"
                                            ? "bg-orange-100 text-orange-600"
                                            : item.status === "in_progress"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-green-100 text-green-600"
                                        }`}
                                >
                                    {item.status.replace("_", " ")}
                                </span>

                                <button
                                    onClick={() => openModal(item)}
                                    className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                                >
                                    Change Status
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-[fadeScale_0.25s_ease-out]">
                        <h3 className="mb-4 text-xl font-semibold text-gray-800">
                            Change Support Status
                        </h3>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        >
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>

                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={closeModal}
                                className="rounded-lg cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleStatusChange}
                                className="rounded-lg cursor-pointer bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600"
                            >
                                Change Status
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Page;
