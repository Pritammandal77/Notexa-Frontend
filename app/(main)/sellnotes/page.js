"use client";
import Loader2 from "@/components/Loader/Loader2/Loader2";
import PaymentBtn from "@/components/ui/PaymentBtn";
import { axiosInstance } from "@/utils/axiosInstance";
import { Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function Page() {

    const user = useSelector((state) => state.user?.currUser?.user)
    const userId = user?._id; // from auth context / redux
    const [allowed, setAllowed] = useState(false);

    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        subject: "",
        className: "",
        pagesCount: "",
        category: "",
        description: "",
        notesFile: null,
        samples: [],
    });

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const [sampleImages, setSampleImages] = useState([]);

    const handleSampleChange = (e) => {
        const files = Array.from(e.target.files);

        // merge old + new selected files
        const allFiles = [...form.samples, ...files];

        // limit to max 2
        const limitedFiles = allFiles.slice(0, 2);

        // update form with the File objects
        setForm({ ...form, samples: limitedFiles });

        // generate preview URLs
        const previews = limitedFiles.map((file) => URL.createObjectURL(file));
        setSampleImages(previews);
    };


    const handleNotesFileSize = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ];
        const maxSize = 25 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            toast.error("Please upload only PDF, DOCX, DOC, or PPTX files.");
            e.target.value = null;
            return;
        }

        if (file.size > maxSize) {
            toast.error("File size exceeds 25 MB. Please upload a smaller file.");
            e.target.value = null;
            return;
        }

        setForm({ ...form, notesFile: file });
    };

    const uploadNotes = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("title", form.title);
            data.append("subject", form.subject);
            data.append("className", form.className);
            data.append("pagesCount", form.pagesCount);
            data.append("description", form.description);
            data.append("category", form.category)
            if (form.notesFile) data.append("notesFile", form.notesFile);
            if (form.samples.length > 0)
                form.samples.forEach((img) => data.append("samples", img));

            setIsLoading(true)
            const response = await axiosInstance.post(
                "/api/v1/notes/upload-notes",
                data,
                {
                    withCredentials: true,
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setIsLoading(false)

            toast.success("Notes uploaded successfully!");
            router.push("/");
        } catch (error) {
            setIsLoading(false)
            console.error("Error uploading:", error);
            toast.error(error.response?.data?.message || "Upload failed!");
        }
    };


    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-orange-50 to-orange-100 py-10 px-4 flex justify-center">
            <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-3 md:p-8 border border-orange-200">
                <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">
                    Upload Your Notes
                </h1>
                <p className="text-gray-600 text-center mb-8 text-sm">
                    Share your handwritten or digital notes with learners across India.
                    Fill in the details below carefully before submitting.
                </p>


                {/* Smooth Upload Guide */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8 shadow-sm">
                    <h2 className="text-lg font-semibold text-orange-600 mb-3 flex items-center gap-2">
                        ⚡ For a Smooth Upload Experience:
                    </h2>
                    <ul className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
                        <li>
                            <span className="font-semibold text-orange-500">Step 1:</span> Convert your handwritten or digital notes into a single <strong>PDF file</strong>.
                        </li>
                        <li>
                            <span className="font-semibold text-orange-500">Step 2:</span> Compress your file using{" "}                                 <a
                                href="https://www.ilovepdf.com/compress_pdf"
                                target="_blank"
                                className="text-orange-600 underline hover:text-orange-700"
                            >
                                ilovepdf.com
                            </a>{" "}
                            or{" "}
                            <a
                                href="https://www.smallpdf.com/compress-pdf"
                                target="_blank"
                                className="text-orange-600 underline hover:text-orange-700"
                            >
                                smallpdf.com
                            </a>{" "}
                            to keep it under <strong>25 MB</strong>.
                        </li>
                        <li>
                            <span className="font-semibold text-orange-500">Step 3:</span> Once ready, fill in the required details & upload your notes below.
                        </li>
                    </ul>
                </div>

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
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
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
                            className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none h-40 xl:h-30 resize-none"
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Notes Sample (Upload 2 images)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            required
                            onChange={handleSampleChange}
                            className="w-full border border-orange-200 p-2 rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition"
                        />
                        {sampleImages.length > 0 && (
                            <div className="mt-3 flex gap-3 flex-wrap">
                                {sampleImages.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`sample-${i}`}
                                        className="w-auto h-24 object-cover rounded-lg border border-orange-200 shadow-sm"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Upload Notes File (PDF, DOCX, DOC, PPTX)
                        </label>
                        <input
                            type="file"
                            accept=".pdf, .docx, .doc, .pptx"
                            required
                            onChange={handleNotesFileSize}
                            className="w-full border border-orange-200 p-2 rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition"
                        />
                    </div>

                    <div className="">

                        {!allowed ?
                            <PaymentBtn userId={userId} onSuccess={() => setAllowed(true)} />
                            :
                            <button
                                disabled={!allowed}
                                onClick={uploadNotes}
                                className={`mt-4 px-5 py-2 flex gap-3 rounded cursor-pointer ${allowed ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                Upload Notes
                                {
                                    !allowed &&
                                    <Ban />
                                }
                            </button>
                        }
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
    );
}

export default Page;
