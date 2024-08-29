import express from "express";
import {
  deleteproduct,
  getproduct,
  postproduct,
  updateproduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getproduct);

router.post("/", postproduct);

router.delete("/:id", deleteproduct);

router.put("/:id", updateproduct);

export { router as productRoutes };
