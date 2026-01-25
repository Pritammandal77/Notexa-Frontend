import { axiosInstance } from "./axiosInstance"


export const createNewSupportRequest = async ({ fullName, email, subject, message }) => {
    const res = await axiosInstance.post("/api/v1/support/need-support",
        {
            fullName,
            email,
            subject,
            message
        },
        {
            withCredentials: true
        }
    )
    console.log(res)
    return res;
}


export const fetchAllSupports = async () => {
    const res = await axiosInstance.get("/api/v1/support/fetch-support-requests")
    return res;
}


export const updateSupportReqStatus = async (status, supportId) => {
    const res = await axiosInstance.patch("/api/v1/support/update-withdraw-req-status", {
        status,
        supportId
    })
    return res;
}