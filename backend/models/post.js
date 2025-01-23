import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    likes: {
        type: Number,
    }
});


export default mongoose.model("Post", PostSchema);
