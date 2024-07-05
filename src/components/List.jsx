import User from "./User";

function List({ users, onDelete }) {
  return (
    <div className="w-full bg-gray-300  p-2 rounded-xl shadow-md mt-3">
      <div className="p-4 bg-gray-300 ">
        <div className="border border-opacity-30 rounded-xl border-gray-400 overflow-hidden shadow-sm">
          <div className="grid font-bold grid-cols-5 text-gray-700 bg-gray-200 justify-center items-center ">
            <p className=" py-2 justify-self-center">ردیف</p>
            <p className=" py-2 justify-self-center">نام</p>
            <p className=" py-2 justify-self-center">نام خانوادگی</p>
            <p className=" py-2 justify-self-center">کد ملی</p>
            <p className=" py-2 justify-self-center">عملیات</p>
          </div>

          {users.map((user, index) => {
            return (
              <User
                user={user}
                key={user.id}
                index={index}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
