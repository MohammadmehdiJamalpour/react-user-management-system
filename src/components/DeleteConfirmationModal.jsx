import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4 relative">
        <h2 className="text-xl font-bold mb-4">حذف کاربر</h2>
        <p className="mb-4">آیا مطمئن هستید که می خواهید این کاربر را حذف کنید؟</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-xl"
            onClick={onClose}
          >
            انصراف
          </button>
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-xl"
            onClick={onConfirm}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
