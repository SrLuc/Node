//express
const express = require("express");
const app = express();
app.use(express.json());

//database connection
const dbConnection = require("./src/database/conection");
dbConnection();

//models
const UserModel = require("./src/models/user.model");

//endpoints
app.get("/", (req, res) => res.send("Hello World!"));

//create user
app.post("/user/create", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get all users
app.get("/user", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get user by id
app.get("/user/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update user by id
app.patch("/user/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//delete user by id
app.delete("/user/:id", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

//server
const port = 5000;
app.listen(port, () => console.log(`Rodando na Porta: ${port}`));
