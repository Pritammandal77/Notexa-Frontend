"use client"
import { axiosInstance } from '@/utils/axiosInstance';
import { getNotesById } from '@/utils/notesApi';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

function page() {

    const user = useSelector((state) => state.user?.currUser?.user)
    const userId = user?._id;
    const { id } = useParams();
    const [OldnotesData, setOldNotesData] = useState(null);


    useEffect(() => {
        async function fetchNote() {
            const res = await getNotesById(id);
            setOldNotesData(res?.data);
            console.log("notes data at edit page", res?.data)
        }
        fetchNote();
    }, [id]);


    const [form, setForm] = useState({
        title: "",
        subject: "",
        className: "",
        pagesCount: "",
        category: "",
        description: "",
    });

    useEffect(() => {
        if (OldnotesData) {
            setForm({
                title: OldnotesData.title || "",
                subject: OldnotesData.subject || "",
                className: OldnotesData.className || "",
                pagesCount: OldnotesData.pagesCount || "",
                category: OldnotesData.category || "",
                description: OldnotesData.description || "",
            });
        }
    }, [OldnotesData]);


    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const updateNotes = async (e, id) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.patch(
                "/api/v1/notes/update-notes",
                {
                    title: form.title,
                    subject: form.subject,
                    className: form.className,
                    pagesCount: form.pagesCount,
                    description: form.description,
                    category: form.category,
                    notesId: id,
                },
                {
                    withCredentials: true,
                }
            );

            toast.success("Notes Updated successfully!");
            console.log("Updated:", response.data);
        } catch (error) {
            console.error("Error while updating notes:", error);
            toast.error("Error while updating the notes")
        }
    };



    return (
        <>
            <div className="min-h-screen pt-20 bg-gradient-to-b from-orange-50 to-orange-100 py-10 px-4 flex justify-center">
                <div className="max-w-screen h-auto w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-3 md:p-8 border border-orange-200">
                    <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">
                        Update Notes
                    </h1>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Notes Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. DBMS Unit 3 Notes"
                                required
                                className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                onChange={handleChange}
                                value={form?.title}
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[47%]">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="e.g. Physics"
                                    className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    onChange={handleChange}
                                    value={form?.subject}
                                />
                            </div>
                            <div className="w-[47%]">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Class (optional)
                                </label>
                                <input
                                    type="text"
                                    name="className"
                                    placeholder="e.g. class 12"
                                    className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    onChange={handleChange}
                                    value={form?.className}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            {/* 📄 Pages Count Field */}
                            <div className="w-[47%]">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pages Count
                                </label>
                                <input
                                    type="text"
                                    name="pagesCount"
                                    required
                                    placeholder="e.g. 27"
                                    className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200"
                                    onChange={handleChange}
                                    value={form?.pagesCount}
                                />
                            </div>

                            <div className="w-[47%]">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    value={form.category}
                                    required
                                    className="w-full p-3 border border-orange-200 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none cursor-pointer appearance-none transition-all duration-200"
                                    onChange={handleChange}
                                >
                                    <option value="">Select Category</option>
                                    <option value="computer-science">Computer Science / IT</option>
                                    <option value="mathematics">Mathematics</option>
                                    <option value="physics">Physics</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="biology">Biology</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="programming">Programming</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="ai">AI</option>
                                    <option value="entrance-preparation">Entrance Preparation</option>
                                    <option value="school">School Notes</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                required
                                placeholder="Write a short description..."
                                className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none h-24 resize-none"
                                onChange={handleChange}
                                value={form?.description}
                            ></textarea>
                        </div>

                        <div className="xl:p-6">
                            <button
                                onClick={(e) => updateNotes(e, id)}
                                className={`mt-4 px-5 py-2 flex gap-3 cursor-pointer bg-orange-500 text-white rounded-xl font-semibold`}
                            >
                                Update Notes

                            </button>
                        </div>

                    </form>
                </div>

                {
                    isLoading &&
                    <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-orange-50 flex-col">
                        <Loader2 />
                        <p className="text-[20px] text-center">
                            Uploading, please wait.....
                            <br />
                            <span className="text-[18px] text-gray-600">Do not close or refresh the page</span>
                        </p>
                    </div>
                }

            </div >
        </>
    );
}

export default page;
