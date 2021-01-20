import Category from "../models/category.model.js";

const _create = async (req, res) => {
  try {
    let { title, thumbnail, path } = req.query;
    const newCategory = await new Category({
      title,
      thumbnail,
      path,
    });

    const category = await newCategory.save();
    return res.status(201).send({ category });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const _findAll = async (res) => {
  try {
    const category = await Category.find({
      title: 1,
      thumbnail: 1,
      path: 1,
      _id: 0,
    });
    return res.status(302).send(category);
  } catch (err) {
    return res
      .status(500)
      .send({ message: err.message || "some error occured" });
  }
};

const _findOne = async (req, res) => {
  try {
    const title = req.query.title;
    const category = await Category.findOne({
      title: new RegExp(`^${title}`, "i"),
    });

    if (!category) {
      return res.status(404).send({
        message: `category not found with id ${req.query.title}`,
      });
    } else {
      return res.status(302).send(category);
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `user not found with id ${req.query.email}`,
      });
    }
    return res.status(500).send({
      message: `Error retrieving user with id ${err}`,
    });
  }
};

export default { _create, _findAll, _findOne };
