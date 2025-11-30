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

export const getNotesById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const fetchCurrentUserNotes = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/notes/my-notes",
            {
                withCredentials: true
            }
        )
        return response.data
    } catch (error) {
        console.log("Error while fectching notes");
    }
}

export const deleteNotes = async (notesId) => {
    try {
        const res = await axios.delete(`http://localhost:8000/api/v1/notes/delete-notes/${notesId}`,
            {
                withCredentials: true
            }
        )
        return res.data
    } catch (error) {
        console.log("Error while deleting notes");
    }
}