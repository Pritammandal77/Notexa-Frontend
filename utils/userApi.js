import {axiosInstance} from "./axiosInstance"
import { toast } from "sonner";
import { fetchWithAuth } from "./auth";


export const fetchCurrentUser = async () => {
    const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/me`);
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.log("Failed to fetch user");
    }
}

export const logOutUser = async () => {
    try {
        const res = await axiosInstance.post(
            "/api/auth/logout",
            {}, // body empty
            {
                withCredentials: true, // 👈 send cookies with request
            }
        );
        console.log(res)
        if (res.data.ok) {
            toast.success("Logged out successfully")
        } else {
            toast.error("Log out failed")
        }
    } catch (err) {
        toast.error("Logout failed : something went wrong")

    }
}