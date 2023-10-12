
import express from 'express';
import cors from 'cors';
import coffeeRoutes from './routes/coffeeRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', coffeeRoutes);

export default app;

