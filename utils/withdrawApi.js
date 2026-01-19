import { axiosInstance } from "./axiosInstance"


export const requestWithdraw = async (amount, upiId) => {
    const res = await axiosInstance.post("/api/v1/withdraw/request-withdraw",
        {
            amount, upiId
        },
        {
            withCredentials: true
        }
    )
    return res;
}


export const fetchAllWithdrawRequests = async () => {
    const res = await axiosInstance.get("/api/v1/withdraw/all-withdraw-requests")
    return res;
}

export const fetchCurrUserWithdrawReq = async () => {
    const res = await axiosInstance.get("/api/v1/withdraw/curr-user/withdraw-requests")
    return res;
}