import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});


const heroModel = mongoose.model("HeroSection", heroSectionSchema);
export default heroModel;
