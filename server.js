import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'
import articlesRoutes from './routes/articles.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articlesRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
