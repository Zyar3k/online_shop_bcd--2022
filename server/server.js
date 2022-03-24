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

app.get("/", (req, res) => {
  res.send(
    "<h1> Welcome to Betty Craft Designs</h1><br/><h2>To see products go to <a href='https://bcd-server.herokuapp.com/api/products'>Products API</a></h2>"
  );
});

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
