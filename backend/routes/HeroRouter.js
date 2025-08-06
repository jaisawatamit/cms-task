import express from "express";
import multer from "multer";
import { getHeroSections, addHeroSection, updateHeroSection, deleteHeroSection } from "../controllers/HeroController.js";
import { protect } from "../middleware/authMiddleware.js";

const heroRouter = express.Router();
const upload = multer({ dest: "uploads/" });

heroRouter.get("/", getHeroSections);
heroRouter.post("/", protect, upload.single("image"), addHeroSection);
heroRouter.put("/:id", protect, upload.single("image"), updateHeroSection);
heroRouter.delete("/:id", protect, deleteHeroSection);

export default heroRouter;
