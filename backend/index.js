import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import heroRouter from './routes/HeroRouter.js';
import authRouter from './routes/authRouter.js';
import settingRouter from './routes/settingsRouter.js';


const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRouter);
app.use("/hero", heroRouter);
app.use("/settings", settingRouter);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.log(err));
