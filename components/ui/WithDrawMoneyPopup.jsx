import { requestWithdraw } from '@/utils/withdrawApi';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

function WithDrawMoneyPopup({ open, setOpen, availableBalance }) {

    const [amount, setAmount] = useState("");
    const [upi, setUpi] = useState("");
    const [confirmUpi, setConfirmUpi] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (amount <= 0) {
            toast.error("Enter valid amount")
            return;
        }


        if (upi !== confirmUpi) {
            toast.error("UPI IDs do not match")
            return;
        }

        if (amount > availableBalance) {
            toast.error("You cannot withdraw amount more than available balance")
        }

        console.log({
            amount,
            upi,
        });

        try {
            const res = await requestWithdraw(amount, upi)
            console.log(res)
        } catch (e) {
            toast.error("Error while requesting the withdraw")
        }

        // future: API call for withdraw request
        setOpen(false);
        setAmount("");
        setUpi("");
        setConfirmUpi("");
    };


    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3">

                {/* Modal Box */}
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 relative animate-[fadeScale_0.25s_ease-out]">

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-black"
                    >
                        <X />
                    </button>

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Withdraw Money
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Amount */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Amount
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

                        {/* UPI */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                UPI ID
                            </label>
                            <input
                                type="text"
                                value={upi}
                                onChange={(e) => setUpi(e.target.value)}
                                placeholder="example@upi"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

                        {/* Confirm UPI */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Confirm UPI ID
                            </label>
                            <input
                                type="text"
                                value={confirmUpi}
                                onChange={(e) => setConfirmUpi(e.target.value)}
                                placeholder="example@upi"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-500 text-white rounded-2xl font-semibold hover:bg-orange-600 transition"
                        >
                            Submit Withdrawal
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default WithDrawMoneyPopup;


