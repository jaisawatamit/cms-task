import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  videoUrl: { type: String }
});

const settingModel = mongoose.model("Settings", settingsSchema);

export default settingModel;
