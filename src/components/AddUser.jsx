import React, { useState } from "react";

function AddUser({ isOpen, onClose, onSave }) {
  const [newUser, setNewUser] = useState({ name: "", familyName: "", idCardNumber: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

    // Regular expression for Persian characters
    const persianRegex = /^[\u0600-\u06FF\s]+$/;

    // Validation function for Persian characters
    const isPersian = (value) => {
      return persianRegex.test(value);
    };

  const handleSave = () => {
    if (!newUser.name || !newUser.familyName || !newUser.idCardNumber) {
      alert("لطفا اطلاعات صحیح را وارد کنید");
      return;
    }

    if (newUser.name.length < 2) {  
      alert("نام باید حداقل ۲ کاراکتر باشد");  
      return;
    }

    if (!isPersian(newUser.name)) {
      alert("نام باید فقط شامل حروف فارسی باشد");
      return;
    }

    if (newUser.familyName.length < 3) {
      alert("نام خانوادگی باید حداقل ۳ کاراکتر باشد");
      return;
    }


    if (!isPersian(newUser.familyName)) {
      alert("نام خانوادگی باید فقط شامل حروف فارسی باشد");
      return;
    }

    if (!isNumber(newUser.idCardNumber)) {
      alert("لطفاً کد ملی را به صورت عدد وارد کنید");
      return;
    }

    if (newUser.idCardNumber.length !== 10) {
      alert("کد ملی باید دقیقاً 10 رقم باشد");
      return;
    }

    onSave({ ...newUser, id: Date.now() });
    setNewUser({ name: "", familyName: "", idCardNumber: "" });
    onClose();
  };

  const isNumber = (value) => {
    return /^\d+$/.test(value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">افزودن کاربر جدید</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 rounded-full inline-block p-1 bg-gray-400 text-white hover:bg-gray-600 transition duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-4 ">
          <div className="flex items-center">
            <label htmlFor="nameInput" className="w-1/3 text-right">
              نام:
            </label>
            <input
              type="text"
              id="nameInput"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              className="bg-inherit w-2/3 border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="familyNameInput" className="w-1/3 text-right">
              نام خانوادگی:
            </label>
            <input
              type="text"
              id="familyNameInput"
              name="familyName"
              value={newUser.familyName}
              onChange={handleInputChange}
              className="bg-inherit w-2/3 border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="idCardNumberInput" className="w-1/3 text-right">
              کد ملی:
            </label>
            <input
              type="text"
              id="idCardNumberInput"
              name="idCardNumber"
              value={newUser.idCardNumber}
              onChange={handleInputChange}
              className="bg-inherit w-2/3 border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white py-1.5 px-3 rounded-xl transition duration-300"
              onClick={handleSave}
            >
              افزودن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
