// "use client"
// import { fetchAllWithdrawRequests } from '@/utils/withdrawApi';
// import React, { useEffect, useState } from 'react';
// import { toast } from 'sonner';

// function page() {

//     const [withdrawRequests, setWithdrawRequests] = useState(null)

//     useEffect(() => {
//         const fetchAllPayoutRequests = async () => {
//             try {
//                 const res = await fetchAllWithdrawRequests()
//                 console.log(res)
//                 setWithdrawRequests(res.data.data)
//             } catch (error) {
//                 toast.error("Error while fetching the payout requests")
//                 console.log("Error while fetching the payout requests")
//             }
//         }
//         fetchAllPayoutRequests();
//     }, []);

//     return (
//         <>
//             <div className='mt-17 min-h-screen w-full xl:px-20 xl:py-5'>
//                 <div className='w-full'>
//                     <h2 className="text-4xl font-bold text-gray-900">
//                         <span className="text-orange-500 pr-3">Withdraw</span>
//                         Requests
//                     </h2>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default page;


"use client";

import React, { useEffect, useState } from "react";
import { fetchAllWithdrawRequests, updateWithDrawReqStatus } from "@/utils/withdrawApi";
import { toast } from "sonner";

const statusStyles = {
    pending: "bg-red-100 text-red-700",
    processing: "bg-blue-100 text-blue-700",
    fulfilled: "bg-green-100 text-green-700",
    rejected: "bg-red-700 text-white",
};

export default function Page() {
    const [withdrawRequests, setWithdrawRequests] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedWithdraw, setSelectedWithdraw] = useState(null);
    const [newStatus, setNewStatus] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchAllWithdrawRequests();
                setWithdrawRequests(res.data.data);
            } catch (err) {
                toast.error("Error fetching withdraw requests");
            }
        };
        fetchData();
    }, []);

    const openPopup = (withdraw) => {
        setSelectedWithdraw(withdraw);
        setNewStatus(withdraw.status);
        setShowPopup(true);
    };

    const handleChangeStatus = async () => {
        try {
            const res = await updateWithDrawReqStatus(newStatus, selectedWithdraw._id);

            console.log("withdraw req updated", res)

            toast.success("Withdraw status updated");
            setShowPopup(false);
        } catch (err) {
            toast.error("Failed to update status");
            console.log(err)
        }
        console.log(newStatus)
    };

    return (
        <div className="mt-16 min-h-screen px-6 xl:px-20 py-6">
            <h2 className="text-4xl font-bold mb-10">
                <span className="text-orange-500">Withdraw</span> Requests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {withdrawRequests.map((req) => (
                    <div
                        key={req._id}
                        className="rounded-xl border border-gray-400 shadow-sm p-5 space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={req.requestedUser.profilePicture}
                                className="w-14 h-14 rounded-full"
                                alt="profile"
                            />
                            <div>
                                <p className="font-semibold">{req.requestedUser.fullName}</p>
                                <p className="text-sm text-gray-500">{req.requestedUser.email}</p>
                            </div>
                        </div>

                        <div className="text-md space-y-1">
                            <p><b>Amount:</b> ₹{req.amount}</p>
                            <p><b>UPI:</b> {req.upiId}</p>
                            <p><b>Date:</b> {new Date(req.createdAt).toLocaleString()}</p>
                        </div>

                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusStyles[req.status]}`}>
                            Current Status: {req.status}
                        </div>

                        <button
                            onClick={() => openPopup(req)}
                            className="block w-full mt-3 rounded-lg bg-orange-500 cursor-pointer text-white py-2 hover:opacity-90"
                        >
                            Change Status
                        </button>
                    </div>
                ))}
            </div>

            {
                showPopup && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
                        <div className="bg-white rounded-xl w-full max-w-md p-6 animate-[fadeScale_0.25s_ease-out] space-y-5">
                            <h3 className="text-xl font-semibold">Update Withdraw Status</h3>

                            <select
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="fulfilled">Fulfilled</option>
                                <option value="rejected">Rejected</option>
                            </select>

                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="px-4 py-2 rounded-lg border cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleChangeStatus}
                                    className="px-4 py-2 rounded-lg bg-orange-500 text-white cursor-pointer"
                                >
                                    Change Status
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}
