const { Router, response } = require("express");
const router = require("express").Router();
const user = require("../models/user");

router.get("/login", async (req, res) => {
  try {
    const data = await user.findOne({
      userName: req.headers.username,
      password: req.headers.password,
    });
    if (data) {
      return res.status(200).send({ success: true, user: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data Not Found" });
    }
  } catch (e) {
    return res.status(505).json({ message: e });
  }
});

router.post("/signup", async (req, res) => {
  const data = await user.findOne({ userName: req.body.userName });
  if (!data) {
    const newUser = user({
      userName: req.body.userName,
      password: req.body.password,
      image_url: req.body.image_url,
    });
    try {
      const savedUser = await newUser.save();
      return res.status(200).send({ success: true, user: savedUser });
    } catch (e) {
      return res.status(505).json({ message: "Cannot Create User" });
    }
  } else {
    return res.status(505).json({ message: "User Already Exists" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await user.find();
    if (data) {
      return res.status(200).send({ success: true, users: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data Not Found" });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ success: false, msg: "Cannot get All Users" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const result = await user.deleteOne(filter);
    if (result) {
      return res.status(200).send({
        success: true,
        msg: "Data Deleted Successfully",
        data: result,
      });
    } else {
      return res.status(400).send({ success: false, msg: "Data Not Found" });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ success: false, msg: "Cannot delete the user" });
  }
});

router.put("/like/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await user.findByIdAndUpdate(
      filter,
      {
        likes: req.body.likes,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

router.put("/dislike/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await user.findByIdAndUpdate(
      filter,
      {
        dislike: req.body.dislike,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

router.put("/review/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await user.findByIdAndUpdate(
      filter,
      {
        reviews: req.body.reviews,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

router.put("/rating/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await user.findByIdAndUpdate(
      filter,
      {
        ratings: req.body.ratings,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

module.exports = router;
