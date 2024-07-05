import React from "react";

function ViewUser({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">اطلاعات کاربر:</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 hover:bg-gray-600 rounded-full inline-block p-1 bg-gray-400 transition duration-300 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <p>
            <span className="font-bold">نام :</span> {user.name}
          </p>
          <p>
            <span className="font-bold">نام خانوادگی : </span>
            {user.familyName}
          </p>
          <p>
            <span className="font-bold">کد ملی :</span> {user.idCardNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
