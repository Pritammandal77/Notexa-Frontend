"use client";
import { getNotesById } from "@/utils/notesApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
    const { id } = useParams();
    const [notesData, setNotesdata] = useState(null)
    
    useEffect(() => {
        async function fetchNote() {
            const data = await getNotesById(id);
            console.log(data);
            setNotesdata(data);
        }
        fetchNote();
    }, []);

    return (
        <div className="pt-17 w-full h-300">
            Note detail page for ID: {id}
        </div>
    );
}

export default Page;
