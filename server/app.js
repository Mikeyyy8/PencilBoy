import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// route imports 
import productRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'


dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional, handles form-data

// Routes
app.use('/api/auth', authRoutes)
app.use('/products', productRoutes)


// Root route
app.get('/', (req, res) => res.send('eCommerce API is running...'));

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 