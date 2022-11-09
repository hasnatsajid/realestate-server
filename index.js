import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import listingRoutes from './routes/listings.js';
import userRoutes from './routes/user.js';
import { buyListings, rentListings } from './controllers/listings.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/listings', listingRoutes);
app.use('/buy', buyListings);
app.use('/rent', rentListings);
app.use('/user', userRoutes);

// const CONNECTION_URL = 'mongodb://localhost:27017/realestate-mern';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
