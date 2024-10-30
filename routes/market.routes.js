import { Router } from "express";
import { createMarketController , findMarketController,deleteMarketController, updateMarketController} from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get("/:id", findMarketController);
marketRoutes.put("/", updateMarketController)
marketRoutes.delete("/:id",deleteMarketController);
