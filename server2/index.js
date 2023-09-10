const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const PORT = 5000;

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      mail: req.body.mail,
      password: req.body.password,
      quote: req.body.quote,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      mail: req.body.mail,
      password: req.body.password,
    });
    res.json({ status: "ok" });

    console.log(user.name);
    console.log(user.quote);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log("server running on PORT 5000"));
