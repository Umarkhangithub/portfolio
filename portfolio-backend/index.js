import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './dbConnection/connectDb.js';
import ProjectRoutes from './routes/projectRoutes.js';
import AuthRoutes from './routes/authRoutes.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb+srv://mohdumarmerndev:merndev@cluster0.f0ezo.mongodb.net/portfolio"

// Connect to the database
connectDB(DATABASE_URL);



// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data

// Serve static files (images)
app.use("/uploads", express.static("uploads"));

// API Routes
app.use('/api/projects', ProjectRoutes);
app.use('/api/auths', AuthRoutes); // Handle authentication routes


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});