import heroModel from "../model/HeroModel.js";


export const getHeroSections = async (req, res) => {
  try {
    const data = await heroModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addHeroSection = async (req, res) => {
  try {
    const { text } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
    const newHero = await heroModel.create({ text, imageUrl });
    res.json(newHero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHeroSection = async (req, res) => {
  try {
    const updateData = { text: req.body.text };
    if (req.file) updateData.imageUrl = `/uploads/${req.file.filename}`;
    const updated = await heroModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHeroSection = async (req, res) => {
  try {
    await heroModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
