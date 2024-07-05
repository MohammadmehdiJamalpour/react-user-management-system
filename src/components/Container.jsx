import SearchBar from "./SearchBar";
import List from "./List";
import { useState } from "react";
import usersData from "../users.json";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import UserLocation from "./UserLocation";
import UserChart from "./UserChart";

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

  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [location, setLocation] = useState({
    latitude: 35.6892,
    longitude: 51.389,
  });

  const handleLocationClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setLocation({
        latitude: user.latitude || 35.6892,
        longitude: user.longitude || 51.389,
      });
    }
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
  };

  const [isChartOpen, setIsChartOpen] = useState(false);

  const handleChartClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsChartOpen(true);
  };

  const handleChartClose = () => {
    setIsChartOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container gap-2 flex flex-col mx-auto px-4 pt-4 max-w-5xl">
      <SearchBar onAddUser={handleAddUser} onSearch={handleSearch} />
      <List
        users={users}
        onDelete={handleDeleteUser}
        onView={handleViewUser}
        onEdit={handleEditUser}
        onLocationClick={handleLocationClick}
        onChartClick={handleChartClick}
      />
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
      <UserLocation
        isOpen={isMapModalOpen}
        onClose={handleCloseMapModal}
        location={location}
      />
      <UserChart
        isOpen={isChartOpen}
        onClose={handleChartClose}
        user={selectedUser}
      />
    </div>
  );
}

export default Container;
