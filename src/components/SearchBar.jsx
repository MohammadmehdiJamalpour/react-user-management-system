import React, { useState, useEffect } from "react";
import AddUser from "./AddUser"; 

function SearchBar({ onAddUser, onSearch }) {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Search based on any change in any input 
  useEffect(() => {
    onSearch({ name, familyName, idCardNumber });
  }, [name, familyName, idCardNumber]);

  const handleAddUser = (user) => {
    onAddUser(user);
  };

  return (
    <div className="bg-gray-300 flex flex-col p-4 justify-center rounded-xl shadow-md">
      <h3 className="font-bold text-lg text-gray-700">جستجو</h3>
      <div className="flex bg-gray-100 shadow-sm p-3 mt-4 rounded-xl justify-between">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <label htmlFor="name" className="text-gray-600">
              نام :
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="جستجو ..."
              className="bg-inherit border  placeholder:text-gray-300 rounded-lg p-1.5  text-xs focus:outline-none focus:border-2 focus:border-gray-300"
            />
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="familyName" className="text-gray-700">
              نام خانوادگی :
            </label>
            <input
              type="text"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              placeholder="جستجو ..."
              className="bg-inherit border placeholder:text-gray-300 rounded-lg p-1.5 placeholder: text-xs focus:outline-none focus:border-2 focus:border-gray-300"
              id="familyName"
            />
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="idCardNumber" className="text-gray-700">
              کد ملی :
            </label>
            <input
              type="text"
              value={idCardNumber}
              onChange={(e) => setIdCardNumber(e.target.value)}
              placeholder="جستجو ..."
              className="bg-inherit border placeholder:text-gray-300 rounded-lg p-1.5 placeholder: text-xs focus:outline-none focus:border-2 focus:border-gray-300"
              id="idCardNumber"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between ml-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 shadow-md bg-gray-400 rounded-xl text-white hover:bg-gray-600 transition duration-300"
          >
            افزودن
          </button>
        </div>
      </div>
      <AddUser
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
      />
    </div>
  );
}

export default SearchBar;
