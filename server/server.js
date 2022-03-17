import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Happy coding! ;)");
});
