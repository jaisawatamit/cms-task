import jwt from "jsonwebtoken";
import AdminModel from "../model/adminModel.js";


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });

    if (admin && await admin.matchPassword(password)) {
      res.json({
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
