import express from "express";
import Category from "../controller/categories.js";

const category = express.Router();

category.post("/", Category._create);
// user.delete("/", User._delete);
category.get("/", (req, res) => {
  if (req.query.email) {
    Category._findOne(req, res);
  } else {
    Category._findAll(res);
  }
});

export default category;
