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

export const updateWithDrawReqStatus = async (status, withdrawId) => {
    const res = await axiosInstance.put("/api/v1/withdraw/update-withdraw-req-status",
        {
            status, withdrawId
        },
        {
            withCredentials: true
        }
    )
    return res;
}