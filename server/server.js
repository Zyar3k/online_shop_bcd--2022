import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", productRoutes);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Happy coding! ;)");
});
