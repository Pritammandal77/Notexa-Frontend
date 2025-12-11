"use client";
import axios from "axios";
import { toast } from "sonner";
import { useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

function PaymentBtn({ userId, onSuccess }) {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async () => {
        try {
            const { data } = await axiosInstance.post(
                "/api/v1/payments/create-order-uploadnotes",
                { userId }
            );

            const order = data.order;

            if (!window.Razorpay) {
                toast.error("Razorpay SDK failed to load. Refresh the page.");
                return;
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Notexa Notes Upload",
                description: "Pay ₹9 to upload your notes",
                order_id: order.id,

                handler: async function (response) {
                    const verify = await axiosInstance.post(
                        "/api/v1/payments/verify-payment",
                        {
                            ...response,
                            userId,
                        }
                    );

                    if (verify.data.success) {
                        toast.success("Payment Verified!");
                        onSuccess();
                    } else {
                        toast.error("Payment failed!");
                    }
                },

                theme: { color: "#ff8800" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.log(error);
            toast.error("Error starting payment");
        }
    };

    return (
        <button
            type="button"
            onClick={handlePayment}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
            Pay ₹9 & Upload Notes
        </button>
    );
}

export default PaymentBtn;
