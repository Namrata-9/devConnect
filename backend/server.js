// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../backend/config/db");
const cors = require("cors");

dotenv.config();
const app = express();

//connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profiles", require("./routes/profileRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

const PORT = process.env.PORT || 7878;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
