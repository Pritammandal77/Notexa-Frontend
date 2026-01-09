import { axiosInstance } from "./axiosInstance"
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
                withCredentials: true,
            }
        );
        console.log(res)
        if (res.data.ok) {
            toast.success("Logged out successfully")
        } else {
            toast.error("Log out failed")
        }
        window.location.reload();
    } catch (err) {
        toast.error("Logout failed : something went wrong")

    }
}

export const addNotesToPurchased = async (notesId) => {
    try {
        const res = await axiosInstance.post("/api/v1/user/add-notes-to-purchased",
            { notesId },
            {
                withCredentials: true
            }
        )
        return res.data
    } catch (error) {
        console.log("Error while marking this notes as purchased")
    }
}

export const getPurchasedNotes = async () => {
    const res = await axiosInstance.get("/api/v1/user/purchased-notes");
    return res;
};


export const getUserById = async (id) => {
    const res = await axiosInstance.get(`/api/v1/user/${id}`)
    return res;
}