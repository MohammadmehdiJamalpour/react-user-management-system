import { useState } from "react";

function SearchBar({ onAddUser, onSearch }) {
  const [name, setName] = useState("");
  const [familyName, setfamilyName] = useState("");
  const [idCardNumber, setidCardNumber] = useState("");

  const handleSubmit = (e) => {
    // Checking data that must be valid
    if (!name || !familyName || !idCardNumber) {
      alert("لطفا اطلاعات کامل را وارد کنید");
      setName("");
      setfamilyName("");
      setidCardNumber("");
      return null;
    }
    e.preventDefault();
    // Creating new user
    const newUser = {
      name,
      familyName,
      idCardNumber,
      id: Date.now(),
    };
    onAddUser(newUser);
    setName("");
    setfamilyName("");
    setidCardNumber("");
  };

  // Searching users
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ name, familyName, idCardNumber });

  };

  return (
    <div className=" bg-gray-300 flex flex-col p-4  justify-center rounded-xl shadow-md">
      <h3 className="font-bold text-lg text-gray-700">جستجو</h3>
      <div className="flex bg-gray-100 shadow-sm p-3 mt-4  rounded-xl justify-between ">
        <div className="flex gap-4    ">
          <div className="flex gap-1 items-center ">
            <p className="text-gray-600">نام :</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              id=""
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-700">نام خانوادگی :</p>
            <input
              type="text"
              value={familyName}
              onChange={(e) => {
                setfamilyName(e.target.value);
              }}
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              id=""
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-700">کد ملی :</p>
            <input
              type="text"
              value={idCardNumber}
              onChange={(e) => {
                setidCardNumber(e.target.value);
              }}
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between ml-3">
          <button
            onClick={handleSearch}
            className="px-4 py-2 shadow-md  bg-gray-400 rounded-xl text-white"
          >
            جستجو
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 shadow-md  bg-gray-400 rounded-xl text-white"
          >
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
