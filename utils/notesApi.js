import axios from "axios";


export const fetchAllNotes = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/notes/all-notes");
        // console.log("dwefrwfef", response)
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}