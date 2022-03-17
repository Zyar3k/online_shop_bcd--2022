import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(console.log("=> api products"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Happy coding! ;)");
});
