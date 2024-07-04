function SearchBar() {
  return (
    <div className=" bg-gray-300 flex flex-col p-4  justify-center rounded-xl">
      <h3 className="font-bold text-lg text-gray-700">جستجو</h3>
      <div className="flex bg-gray-100 p-3 mt-4  rounded-xl justify-between ">
        <div className="flex gap-4    ">
          <div className="flex gap-1 items-center ">
            <p className="text-gray-600">نام :</p>
            <input
              type="text"
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              placeholder="مثال : علی ..."
              id=""
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-700">نام خانوادگی :</p>
            <input
              type="text"
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              placeholder="مثال : محمدی ..."
              id=""
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-700">کد ملی :</p>
            <input
              type="text"
              className="bg-inherit border rounded-lg p-1 text-sm focus:outline-none focus:border-2 focus:border-gray-300"
              name=""
              placeholder="مثال : 002 ..."
              id=""
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between ml-3">
          <button className="px-4 py-2  bg-gray-400 rounded-xl text-white">
            جستجو
          </button>
          <button className="px-4 py-2  bg-gray-400 rounded-xl text-white">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
