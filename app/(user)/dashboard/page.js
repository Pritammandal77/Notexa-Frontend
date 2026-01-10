"use client";

import React, { useEffect, useState } from "react";
import { createOrFetchWallet } from "@/utils/payoutApi";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import DashboardSkeleton from "@/components/SkeletonLoaders/DashboardSkeleton";
import WithDrawMoneyPopup from "@/components/ui/WithDrawMoneyPopup";

export default function Page() {
    const [walletData, setWalletData] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getWallet = async () => {
            const res = await createOrFetchWallet();
            setWalletData(res.data.data);
        };
        getWallet();
    }, []);

    if (!walletData) {
        return (
            <DashboardSkeleton />
        );
    }

    const stats = [
        {
            label: "Total Earnings",
            value: `₹${walletData.totalEarning}`,
        },
        {
            label: "Available Balance",
            value: `₹${walletData.availableBalance}`,
        },
        {
            label: "Withdrawn",
            value: `₹${walletData.withdrawnAmount}`,
        },
        {
            label: "Notes Sold",
            value: walletData.notesSold.length,
        },
    ];

    const balanceChart = [
        {
            name: "Earnings",
            amount: walletData.totalEarning,
        },
        {
            name: "Withdrawn",
            amount: walletData.withdrawnAmount,
        },
        {
            name: "Available",
            amount: walletData.availableBalance,
        },
    ];

    const withdrawHistory = walletData.withdrawHistory || [];

    return (
        <>
            <div className="min-h-screen bg-orange-50 p-4 md:p-6 mt-17 xl:px-25">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <img
                            src={walletData.user.profilePicture}
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">
                                {walletData.user.fullName}
                            </h1>
                            <p className="text-sm text-gray-600">Dashboard</p>
                        </div>
                    </div>

                    <div>
                        <button
                            className="px-4 py-3 bg-orange-500 text-white rounded-2xl font-semibold cursor-pointer"
                            onClick={() => setOpen(true)}>
                            Withdraw Money
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow p-6 hover:scale-[1.02] transition"
                        >
                            <p className="text-sm md:text-md text-gray-600 mb-1">{item.label}</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Area Chart */}
                    <div className="bg-white rounded-2xl shadow p-4 md:p-6">
                        <h3 className="font-semibold mb-4">Wallet Overview</h3>
                        <ResponsiveContainer width="100%" height={260}>
                            <AreaChart data={balanceChart}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#f97316"
                                    fill="#fed7aa"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white rounded-2xl shadow p-4 xl:p-6">
                        <h3 className="font-semibold mb-4">Balance Distribution</h3>
                        <ResponsiveContainer width="100%" height={260}>
                            <BarChart data={balanceChart}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#fb923c" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Withdraw History */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h3 className="font-semibold mb-4">Withdraw History</h3>

                    {withdrawHistory.length === 0 ? (
                        <p className="text-gray-500 text-sm">No withdrawals yet.</p>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th className="py-2">Date</th>
                                    <th className="py-2">Amount</th>
                                    <th className="py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {withdrawHistory.map((item, i) => (
                                    <tr key={i} className="border-b">
                                        <td className="py-2">
                                            {new Date(item.date).toLocaleDateString()}
                                        </td>
                                        <td className="py-2 text-orange-600 font-semibold">
                                            ₹{item.amount}
                                        </td>
                                        <td className="py-2">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {
                open &&
                <WithDrawMoneyPopup
                    open={open}
                    setOpen={setOpen}
                    availableBalance={walletData.availableBalance}
                />
            }
        </>


    );
}

