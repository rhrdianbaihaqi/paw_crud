# 🎓 Student Data CRUD Application [MERN Stack]

This repository contains the source code for a **Student Data Management** web application (CRUD). This is a full-stack project built using the MERN stack (MongoDB, Express.js, React, Node.js).

This project was created to fulfill an assignment for the **Web Application Development** course.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT">
</p>

---

## 🧑‍💻 Developer Profile

This project was designed and developed by:

| Detail | Description |
| :--- | :--- |
| **Name** | Muhammad Rahardian Baihaqi |
| **NIM** | 1237050023 |
| **Class** | PAW-C |
| **Course** | Web Application Development |

---

## 📖 About The Project

Hello! 👋 This is a simple full-stack web application for managing student data.

Its core functionality is the **CRUD** operations (*Create, Read, Update, Delete*). Users can view a list of students, add new students, edit existing data, and remove students from the system.

## ✨ Key Features

This application includes several key features:

-   ✅ **Create:** Add new student data (NIM, Name, Major, Faculty, Year).
-   ✅ **Read:** Display all student data in a table format.
-   ✅ **Update:** Edit the details of an existing student.
-   ✅ **Delete:** Remove a student from the database.
-   ✅ **Backend REST API:** A separate API handles business logic and database connections.
-   ✅ **Component-Based Frontend:** A dynamic user interface built with React.

## 🛠️ Tech Stack (MERN)

This project is built using the MERN Stack:

* **MongoDB**: A flexible NoSQL database used to store the student data.
* **Express.js**: A backend framework for building an efficient REST API on top of Node.js.
* **React**: A client-side JavaScript library for building an interactive user interface (UI).
* **Node.js**: A server-side JavaScript runtime environment.

## 🚀 Getting Started & Installation

Want to run this project on your local machine? Follow these steps!

### Prerequisites

Before you begin, ensure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)
* [MongoDB](https://www.mongodb.com/try/download/community) (Make sure the service is running)

---

### 1. Running the Backend (Server)

```bash
# 1. Clone this repository
git clone [https://github.com/](https://github.com/)[Your-Username]/[Your-Repo-Name].git
cd [Your-Repo-Name]

# 2. Navigate to the backend folder (adjust the folder name if different)
cd server

# 3. Install all necessary dependencies
npm install

# 4. Create a .env file for database configuration
#    Contents of .env file:
#    MONGODB_URI=mongodb://localhost:27017/db_mahasiswa
#    PORT=5000
echo "MONGODB_URI=mongodb://localhost:27017/db_mahasiswa" > .env
echo "PORT=5000" >> .env

# 5. Run the backend server
npm run dev
```
The server will be running at `http://localhost:5000`.

---

### 2. Running the Frontend (Client)

```bash
# Open a new terminal

# 1. Navigate to the frontend folder (adjust the folder name if different)
cd [Your-Repo-Name]/client

# 2. Install all necessary dependencies
npm install

# 3. (Optional) Configure the API URL in a .env.local file if needed
#    (Standard for Create React App)
#    REACT_APP_API_URL=http://localhost:5000/api

# 4. Run the frontend application
npm start
```
The React application will be running at `http://localhost:3000`.

## 🌐 API Endpoints

The API provides the following endpoints for the client to consume:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/getData` | Get all student data. |
| `GET` | `/api/getData/:id` | Get a single student's data. |
| `POST` | `/api/addData` | Create new student data. |
| `PUT` | `/api/updateData/:id` | Update a student's data. |
| `DELETE`| `/api/deleteData/:id` | Delete a student's data. |
