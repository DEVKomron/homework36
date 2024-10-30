import { Router } from "express";
import { createProductController, deleteByIdProduct, getByIdProduct, searchnameproduct, updateByIdProduct, getAlldata } from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.get("/search", searchnameproduct);
productRoutes.get("/", getAlldata)
productRoutes.get("/:id", getByIdProduct)
productRoutes.post("/", createProductController);
productRoutes.put("/:id", updateByIdProduct);
productRoutes.delete("/:id", deleteByIdProduct);

