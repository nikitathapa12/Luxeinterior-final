const express = require('express');
const cors = require('cors');
const connectDB = require('./src/Config/db.js');
const path = require('path');

const authRoute= require('./src/Routes/authRoute');
const profileRoutes= require('./src/Routes/ProfileRoutes.js')
const categoryRoutes=require('./src/Routes/CategoryRoute.js')
const productRoutes=require('./src/Routes/productRoutes.js')
const cartRoutes = require('./src/Routes/CategoryRoute.js')
const contactRoutes= require('./src/Routes/contactRoutes.js')

require('dotenv').config(); 

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

const port = process.env.port || 3000;

connectDB();

app.use(cors());
// app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoutes)
app.use('/api/category', categoryRoutes);
app.use('/api/products',productRoutes)
app.use('/api/cart', cartRoutes);
app.use('/api/contact', contactRoutes);





app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
