import axios from "axios";
import { toast } from "sonner";
import { fetchWithAuth } from "./auth";


export const fetchCurrentUser = async () => {
    const res = await fetchWithAuth('http://localhost:8000/api/auth/me');
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.log("Failed to fetch user");
    }
}

export const logOutUser = async () => {
    try {
        const res = await axios.post(
            "http://localhost:8000/api/auth/logout",
            {}, // body empty
            {
                withCredentials: true, // 👈 send cookies with request
            }
        );

        if (res.data.ok) {
            toast.success("Logged out successfully")
        } else {
            toast.error("Log out failed")
        }
    } catch (err) {
        toast.error("Logout failed : something went wrong")

    }
}