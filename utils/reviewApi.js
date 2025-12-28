import { toast } from "sonner"
import { axiosInstance } from "./axiosInstance"


export const deleteReview = async (id) => {
    try {
        const res = await axiosInstance.delete(`/api/v1/review/delete-review/${id}`)
        if (res.data.statusCode == 200) {
            toast.success("Review deleted successfully")
        }
        return res
    } catch (error) {
        toast.error("Error while deleting the review")
        console.log(error)
    }
}