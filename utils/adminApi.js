import { axiosInstance } from "./axiosInstance"

export const fetchAllUsers = () => {
    const res = axiosInstance.get("/api/v1/admin/all-users",
        {
            withCredentials: true
        }
    )
    return res;
}