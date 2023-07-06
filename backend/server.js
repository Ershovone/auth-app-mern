import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import { notFound, errorHandler } from './middleware/error.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
 