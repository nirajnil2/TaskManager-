# 🚀 Team Task Manager (Full-Stack)

A full-stack **Task Management Web Application** where teams can create projects, assign tasks, and track progress with role-based access control.

---

## 📌 Features

* 🔐 Authentication (Signup / Login with JWT)
* 👥 Role-Based Access (Admin / Member)
* 📁 Project Management
* ✅ Task Creation & Assignment
* 📊 Dashboard with task status tracking
* ⏰ Overdue task highlighting
* 🔎 Filter tasks (My Tasks / All Tasks)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS / CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/nirajnil2/TaskManager-.git
cd TaskManager-
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
TaskManager-
│
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   └── index.js
│
├── frontend
│   ├── src
│   └── components
│
└── README.md
```

---

## 🔐 Role-Based Access Control

| Role   | Permissions                  |
| ------ | ---------------------------- |
| Admin  | Create project, assign tasks |
| Member | View & update assigned tasks |

---

## 📊 API Endpoints (Sample)

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Projects

* POST /api/projects
* GET /api/projects

### Tasks

* POST /api/tasks
* GET /api/tasks
* PUT /api/tasks/:id

---

## 💡 Future Improvements

* 📈 Charts & analytics dashboard
* 🔔 Notifications
* 📱 Mobile responsive UI improvements
* 🌐 Deployment (AWS / Vercel)

---

## 👨‍💻 Author

**Niraj Kumar**

* GitHub: https://github.com/nirajnil2

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

