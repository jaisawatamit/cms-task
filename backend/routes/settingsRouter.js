import express from "express";
import multer from "multer";
import { updateBackgroundVideo } from "../controllers/settingsController.js";
import { protect } from "../middleware/authMiddleware.js";

const settingRouter = express.Router();
const upload = multer({ dest: "uploads/" });

settingRouter.put("/video", protect, upload.single("video"), updateBackgroundVideo);

export default settingRouter;
