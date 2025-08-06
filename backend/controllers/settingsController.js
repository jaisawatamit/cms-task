import settingModel from "../model/settingModel.js";


export const updateBackgroundVideo = async (req, res) => {
  try {
    const videoUrl = `/uploads/${req.file.filename}`;
    const settings = await settingModel.findOneAndUpdate({}, { videoUrl }, { new: true, upsert: true });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
