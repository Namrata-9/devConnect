# DevConnect

DevConnect is a MERN (MongoDB, Express, React, Node.js) full-stack web application that allows users to:

- Create developer profiles
- Post and browse projects
- Comment on projects
- Authenticate using JWT tokens
- Fully responsive UI with Bootstrap

---

## 🔧 Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Others**: Axios, dotenv, concurrently

---

## 🗂 Folder Structure

```
devProfile/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── vite.config.js
│
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/devconnect.git
cd devconnect
```

---

### 2️⃣ Backend Setup (`/backend`)

#### ✅ Navigate to backend folder

```bash
cd backend
```

#### ✅ Install dependencies

```bash
npm install
```

#### ✅ Create `.env` file

Create a `.env` file in `/backend` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/devconnect
JWT_SECRET=your_jwt_secret_key
```

#### ✅ Start backend server

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup (`/client`)

#### ✅ Navigate to client folder

```bash
cd ../client
```

#### ✅ Install dependencies

```bash
npm install
```

#### ✅ Start React app

```bash
npm run dev
```

---

### 4️⃣ Run Both Frontend and Backend Together

From the root directory:

```bash
npm install
npm run dev
```

> This uses `concurrently` to run both servers at once.

---

## 🚀 API Endpoints (Sample)

| Method | Endpoint                    | Description          |
| ------ | --------------------------- | -------------------- |
| POST   | `/api/auth/register`        | Register a new user  |
| POST   | `/api/auth/login`           | Login user           |
| GET    | `/api/profile`              | Get user profile     |
| POST   | `/api/projects`             | Create a project     |
| GET    | `/api/projects`             | Get all projects     |
| POST   | `/api/projects/:id/comment` | Comment on a project |

---

## 🔐 Authentication

- JWT token is stored in `localStorage` on login.
- Protected routes redirect to `/login` if token is missing or invalid.

---

## 📸 Screenshots

(Add your app screenshots here for better presentation)

---

## 🤝 Contribution

Feel free to fork this repository and contribute by submitting a pull request.

---

## 📄 License

MIT License © 2025 [Namrata Modi]
