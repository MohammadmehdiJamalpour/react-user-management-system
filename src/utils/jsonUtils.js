
export const getUsers = async () => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users) throw new Error("No users found");
  return users;
};

export const addUser = async (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const editUser = async (editedUser) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map((user) =>
    user.id === editedUser.id ? editedUser : user
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

export const deleteUser = async (userId) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
