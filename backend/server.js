import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import { productRoutes } from "./routes/product.route.js";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(bodyParser.json());

app.use(cors()); // to give permission to acces from frontend

app.use(express.json()); //accepts json data for us imp to use

app.use("/api/products", productRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("app is listening onn port PORT : ", PORT);
  connectDB();
});
