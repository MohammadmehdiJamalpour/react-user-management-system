import SearchBar from "./SearchBar";
import List from "./List";
import { useState } from "react";
import usersData from "../users.json";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";

function Container() {
  const [users, setUsers] = useState(usersData);
  const [allUsers] = useState(usersData);
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

  const [isViewUserOpen, setIsViewUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsViewUserOpen(true);
  };

  const handleViewUserClose = () => {
    setSelectedUser(null);
    setIsViewUserOpen(false);
  };

  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  const handleEditUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsEditUserOpen(true);
  };

  const handleEditUserSave = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    setIsEditUserOpen(false);
  };

  const handleEditUserClose = () => {
    setIsEditUserOpen(false);
  };

  return (
    <div className="container gap-2 flex flex-col mx-auto px-4 pt-4 max-w-5xl ">
      <SearchBar onAddUser={handleAddUser} onSearch={handleSearch} />
      <List users={users} onDelete={handleDeleteUser} onView={handleViewUser} onEdit={handleEditUser} />
      <ViewUser
        isOpen={isViewUserOpen}
        onClose={handleViewUserClose}
        user={selectedUser}
        onEdit={handleEditUser} 
      />
      <EditUser
        isOpen={isEditUserOpen}
        onClose={handleEditUserClose}
        user={selectedUser}
        onSave={handleEditUserSave}
      />
    </div>
  );
}

export default Container;
