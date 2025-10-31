import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync().then(() => console.log('DB synced'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
