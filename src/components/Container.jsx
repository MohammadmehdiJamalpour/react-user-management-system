import SearchBar from "./SearchBar";
import List from "./List";
import { useState } from "react";
import usersData from "../users.json";

function Container() {
  const [users, setUsers] = useState(usersData);
  const [allUsers] = useState(usersData); // Keep a copy of all users
  const handleAddUser = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers((users) => users.filter((u) => u.id !== id));
  };

  const handleSearch = (searchCriteria) => {
    const filteredUsers = allUsers.filter((user) => {
      return (
        (!searchCriteria.name || user.name.includes(searchCriteria.name)) &&
        (!searchCriteria.familyName ||
          user.familyName.includes(searchCriteria.familyName)) &&
        (!searchCriteria.idCardNumber ||
          user.idCardNumber.includes(searchCriteria.idCardNumber))
      );
    });

    setUsers(filteredUsers);
  };

  return (
    <div className="container gap-2 flex flex-col mx-auto px-4 pt-4 max-w-5xl ">
      <SearchBar onAddUser={handleAddUser} onSearch={handleSearch} />
      <List users={users} onDelete={handleDeleteUser} />
    </div>
  );
}

export default Container;
