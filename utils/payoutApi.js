import { axiosInstance } from "./axiosInstance"


export const createNewTransaction = async (notesId, paymentId) => {
    try {
        const res = await axiosInstance.post("/api/v1/payout/create-new-transaction",
            {
                notesId, paymentId
            },
            {
                withCredentials: true
            }
        )
        console.log(res)
        return res;
    } catch (error) {
        console.log("error while creating the new transaction")
    }

    return res;
}

export const createOrFetchWallet = async () => {
    try {
        const res = await axiosInstance.get("/api/v1/payout/create-or-fetch-wallet")
        return res;
    } catch (error) {
        console.log("error while fetching wallet")
    }
}