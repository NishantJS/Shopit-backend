import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  thumbnail: {
    type: String,
    unique: false,
    required: true,
  },
  path: {
    type: String,
    unique: true,
    required: true,
  },
  sub_categories: {
    title: {
      type: String,
      unique: false,
      required: true,
    },
    thumbnail: String,
    path: {
      type: String,
      unique: true,
      required: true,
    },
    type: Array,
  },
});

const Category = new mongoose.model("Category", categorySchema);

export default Category;
