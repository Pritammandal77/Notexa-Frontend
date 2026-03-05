import React from "react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300
      ${isOpen ? "bg-black/40 opacity-100" : "opacity-0 pointer-events-none"}`}
        >

            <div
                className={`bg-white w-[380px] rounded-xl shadow-xl p-6 transform transition-all duration-300
        ${isOpen ? "scale-100 translate-y-0" : "scale-90 translate-y-4"}`}
            >

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Delete Note
                </h2>

                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete this note? This action cannot be undone.
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default DeleteConfirmModal;