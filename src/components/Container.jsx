import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import UserLocation from "./UserLocation";
import UserChart from "./UserChart";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { getUsers, addUser, editUser, deleteUser } from "../utils/jsonUtils";

function Container() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUsers();
        setUsers(data);
        setAllUsers(data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    }
    fetchData();
  }, []);

  // Function to add a new user
  const handleAddUser = async (newUser) => {
    try {
      await addUser(newUser);
      const data = await getUsers();
      setUsers(data);
      setAllUsers(data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Function to delete a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      const data = await getUsers();
      setUsers(data);
      setAllUsers(data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to search users based on criteria
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

  // Function to edit user data
  const handleEditUserSave = async (editedUser) => {
    try {
      await editUser(editedUser);
      const data = await getUsers();
      setUsers(data);
      setAllUsers(data);
      setIsEditUserOpen(false);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  // Function to open ViewUser modal
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

  // Function to open EditUser modal
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  const handleEditUserOpen = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
    setIsEditUserOpen(true);
  };

  const handleEditUserClose = () => {
    setIsEditUserOpen(false);
  };

  // Function to handle UserLocation modal
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [location, setLocation] = useState({
    latitude: 35.6892,
    longitude: 51.389,
  });

  const handleLocationClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (user && user.cords) {
      setLocation({
        latitude: user.cords.latitude || 35.6892,
        longitude: user.cords.longitude || 51.389,
      });
    } else {
      setLocation({
        latitude: 35.6892,
        longitude: 51.389,
      });
    }
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
  };

  // Function to handle UserChart modal
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

  // Function to handle delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      handleDeleteUser(userToDelete.id);
    }
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  return (
    <div className="container gap-2 flex flex-col mx-auto px-4 pt-4 max-w-5xl">
      <SearchBar onAddUser={handleAddUser} onSearch={handleSearch} />
      <List
        users={users}
        onDelete={handleDeleteClick}
        onView={handleViewUser}
        onEdit={handleEditUserOpen}
        onLocationClick={handleLocationClick}
        onChartClick={handleChartClick}
      />
      <ViewUser
        isOpen={isViewUserOpen}
        onClose={handleViewUserClose}
        user={selectedUser}
        onEdit={handleEditUserOpen}
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
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default Container;
