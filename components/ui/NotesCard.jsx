import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';

function NotesCard({ notesId, notesSample1, title, subject, sellerName, notesPrice, openDropdownId, setOpenDropdownId, handleDeleteNotes }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedNoteId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        handleDeleteNotes(selectedNoteId);
        setShowModal(false);
    };

    return (
        <>
            <div
                key={notesId}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between min-h-[340px]"
            >

                {/* NOTE IMAGE */}
                <div className="w-full h-36 md:h-40 overflow-hidden rounded-xl">
                    <Image
                        src={notesSample1}
                        alt={title || "note"}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* CONTENT */}
                <div className="mt-4 flex flex-col justify-between flex-1">

                    <div className='relative'>
                        <h2 className="text-xl md:text-2xl font-bold text-orange-500 truncate">
                            {title}
                        </h2>

                        <p className="text-sm md:text-md text-gray-700 mt-2">
                            <span className="font-medium">Subject:</span> {subject}
                        </p>

                        {
                            sellerName &&
                            <p className="text-sm md:text-md text-gray-700">
                                <span className="font-medium">Seller:</span> {sellerName}
                            </p>

                        }

                        <p className="text-xl md:text-2xl font-bold text-orange-400 mt-2">
                            ₹{notesPrice}
                        </p>

                        {
                            setOpenDropdownId &&
                            <div className='absolute top-0 right-0 flex flex-col'>
                                <Ellipsis
                                    className='cursor-pointer self-end'
                                    onClick={() => setOpenDropdownId(openDropdownId === notesId ? null : notesId)}
                                />

                                {
                                    openDropdownId === notesId && (
                                        <ul className='bg-orange-100 rounded-2xl animate-[fadeScale_0.25s_ease-out]'>
                                            <li
                                                className="border p-2 rounded-t-xl border-orange-300 hover:bg-orange-200 cursor-pointer"
                                                onClick={() => handleDeleteClick(notesId)}
                                            >
                                                Delete notes
                                            </li>
                                            <Link href={`/notes/${notesId}/edit`}>
                                                <li className='border-1 p-2 rounded-b-xl border-orange-300 hover:bg-orange-200 cursor-pointer'>Edit notes</li>
                                            </Link>
                                        </ul>
                                    )
                                }
                            </div>
                        }

                    </div>

                    <Link href={`/notes/${notesId}`}>
                        <button className="mt-4 w-full px-4 py-2  bg-orange-500 text-white text-sm 
                                        md:text-basefont-semibold rounded-xl hover:bg-orange-600 transition cursor-pointer ">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

            <DeleteConfirmModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}
            />
        </>
    );
}

export default NotesCard;
