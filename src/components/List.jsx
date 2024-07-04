function List() {
  return (
    <div className="w-full bg-gray-300  p-2 rounded-xl shadow-md mt-3">
      <div className="p-4 bg-gray-300 ">
        <div className="border border-opacity-30 rounded-xl border-gray-400 overflow-hidden shadow-sm">
          <div className="grid grid-cols-5 text-gray-700 bg-gray-200 justify-center items-center ">
            <p className="font-bold p-2 justify-self-center">ردیف</p>
            <p className="font-bold p-2 justify-self-center">نام</p>
            <p className="font-bold p-2 justify-self-center">نام خانوادگی</p>
            <p className="font-bold p-2 justify-self-center">کد ملی</p>
            <p className="font-bold p-2 justify-self-center">عملیات</p>
          </div>

          <div className="grid grid-cols-5 bg-gray-100 items-center border-b border-opacity-30 border-gray-400">
            <p className=" p-2 justify-self-center rounded-lg">1</p>
            <p className=" p-2 justify-self-center rounded-lg">محمد</p>
            <p className=" p-2 justify-self-center rounded-lg">حسینی</p>
            <p className=" p-2 justify-self-center rounded-lg">002344234</p>
            <p className=" p-2 justify-self-center rounded-lg">عملیات 1</p>
          </div>

          <div className="grid grid-cols-5 bg-gray-100 items-center border-opacity-30 border-b border-gray-400">
            <p className=" p-2 justify-self-center rounded-lg">1</p>
            <p className=" p-2 justify-self-center rounded-lg">محمد</p>
            <p className=" p-2 justify-self-center rounded-lg">حسینی</p>
            <p className=" p-2 justify-self-center rounded-lg">002344234</p>
            <p className=" p-2 justify-self-center rounded-lg">عملیات 1</p>
          </div>

          <div className="grid grid-cols-5 bg-gray-100 items-center border-opacity-30  border-gray-400">
            <p className=" p-2 justify-self-center rounded-lg">1</p>
            <p className=" p-2 justify-self-center rounded-lg">محمد</p>
            <p className=" p-2 justify-self-center rounded-lg">حسینی</p>
            <p className=" p-2 justify-self-center rounded-lg">002344234</p>
            <p className=" p-2 justify-self-center rounded-lg">عملیات 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
