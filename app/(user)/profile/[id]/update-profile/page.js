
// "use client"
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// function page() {

//     const { id } = useParams();
//     const user = useSelector((state) => state.user?.currUser?.user)
//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//         setUserData(user && user);
//         console.log(user)
//     }, [user]);

//     return (
//         <>
//             <div className='mt-17 h-auto w-full'>

//             </div>
//         </>
//     );
// }

// export default page;

"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { Edit2Icon } from "lucide-react";
import { updateUserProfile } from "@/utils/userApi";
import Loader1 from "@/components/Loader/Loader1.jsx/Loader1";

export default function Page() {
    const user = useSelector((state) => state.user?.currUser?.user);

    const [formData, setFormData] = useState({
        fullName: "",
        aboutUser: "",
        linkedinLink: "",
        instagramLink: "",
    });

    const [profilePreview, setProfilePreview] = useState("");
    const [profileFile, setProfileFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || "",
                aboutUser: user.aboutUser || "",
                linkedinLink: user.linkedinLink || "",
                instagramLink: user.instagramLink || "",
            });

            setProfilePreview(user.profilePicture);
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* Image upload */
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setProfileFile(file);
        setProfilePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const data = new FormData();
            data.append("fullName", formData.fullName);
            data.append("aboutUser", formData.aboutUser);
            data.append("linkedinLink", formData.linkedinLink);
            data.append("instagramLink", formData.instagramLink);

            if (profileFile) {
                data.append("profilePicture", profileFile);
            }

            const res = await updateUserProfile(data)
            console.log("updated data", res)

            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error("Failed to update profile");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-auto bg-gradient-to-b from-orange-100 to-orange-50 mt-16 px-2 md:px-4 py-5 md:py-10 flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-4 md:p-8 flex flex-col">

                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8 self-center">
                    <span className="text-orange-500">Update</span> Profile
                </h2>

                {/* P rofile Picture */}
                <div className="flex items-center gap-6 mb-10">
                    <div className="relative">
                        <img
                            src={profilePreview}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-orange-400 shadow"
                        />

                        <label className="absolute -bottom-0 -right-1 bg-orange-500 hover:bg-orange-600 text-white text-[10px] px-2 py-2 rounded-full cursor-pointer shadow">
                            <Edit2Icon className="w-4 h-4 font-bold" />
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700">
                            Profile Picture
                        </h3>
                        <p className="text-sm text-gray-500">
                            JPG or PNG, max 2MB
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                    </div>

                    {/* About */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            About You
                        </label>
                        <textarea
                            name="aboutUser"
                            rows="4"
                            value={formData.aboutUser}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                    </div>

                    {/* LinkedIn */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            LinkedIn Profile
                        </label>
                        <input
                            type="text"
                            name="linkedinLink"
                            value={formData.linkedinLink}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                    </div>

                    {/* Instagram */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Instagram Profile
                        </label>
                        <input
                            type="text"
                            name="instagramLink"
                            value={formData.instagramLink}
                            onChange={handleChange}
                            placeholder="https://instagram.com/username"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white cursor-pointer font-semibold py-3 rounded-lg transition disabled:opacity-60"
                    >
                        {isLoading ? "Updating..." : "Update Profile"}
                    </button>
                </form>
            </div>

            {
                isLoading &&
                <div className="w-full h-full flex items-center justify-center absolute top-15">
                    <Loader1 />
                </div>
            }
        </div>
    );
}
