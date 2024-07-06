# React User Management System

## Overview

The **React User Management System** is a robust and intuitive web application designed to manage user information efficiently. This project allows you to add, edit, and delete users, with each user entry comprising a name, family name, and ID card number. Developed with React, Tailwind CSS, and Vite.js, this system is optimized for performance and a seamless user experience.

## Features

- **Add Users**: Easily add new users with their name, family name, and ID card number.
- **Edit Users**: Update existing user information effortlessly.
- **Delete Users**: Remove users from the list with a simple click.
- **Search Functionality**: Search users based on name, family name, or ID card number.
- **Responsive Design**: Built with Tailwind CSS to ensure a responsive and visually appealing interface.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite.js**: A next-generation frontend tooling that provides fast and efficient development and build processes.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/react-user-management-system.git
    cd react-user-management-system
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Add a User**:
    - Click on the "افزودن" (Add) button.
    - Fill in the name, family name, and ID card number fields.
    - Click "Save" to add the user.

2. **Edit a User**:
    - Click the "Edit" button next to the user's information.
    - Modify the desired fields.
    - Click "Save" to update the user's information.

3. **Delete a User**:
    - Click the "Delete" button next to the user's information.
    - Confirm the deletion in the popup modal.

4. **Search for a User**:
    - Enter the name, family name, or ID card number in the search fields.
    - The user list will filter in real-time based on the search criteria.

## Directory Structure

```plaintext
react-user-management-system/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddUser.jsx
│   │   ├── EditUser.jsx
│   │   ├── List.jsx
│   │   ├── SearchBar.jsx
│   │   ├── UserLocation.jsx
│   │   ├── UserChart.jsx
│   │   └── ViewUser.jsx
│   ├── utils/
│   │   └── jsonUtils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js
