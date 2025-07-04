import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './app/config';
import booksRoute from './app/modules/book/book.routes';
import borrowRoute from './app/modules/borrow/borrow.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

//import dotenv from 'dotenv';
//dotenv.config(); 

const app: Application = express();

// CORS middleware
app.use(
    cors({
        origin: [
            "https://library-client-beta.vercel.app",
        ],
    })
);

// Middleware
app.use(express.json());
app.use(globalErrorHandler);

// Routes
app.use(booksRoute);
app.use(borrowRoute);

// Test route
app.get('/', (req, res) => {
    res.send('Library Management Server is Running');
});

// Connect to DB first, then start the server
async function startServer() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Connected to MongoDB');

        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1);
    }
}

startServer();
