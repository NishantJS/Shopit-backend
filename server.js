import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongo from "./db/mongo.js";
const port = process.env.PORT || 3000;
import user from "./routes/user.js";
import category from "./routes/category.js";

mongo.connection.on("connected", () => console.log("Connection Successful"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", user);
app.use("/categories", category);

app.get("/", async (req, res) => {
  res.json({ name: "c" });
});

app.post("/", async (req, res) => {});

app.listen(port);
