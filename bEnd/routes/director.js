const router = require("express").Router();

const director = require("../models/director");

router.post("/save", async (req, res) => {
  const newDirector = director({
    name: req.body.name,
    image_url: req.body.image_url,
  });
  try {
    const savedDirectior = await newDirector.save();
    return res.status(200).send({ success: true, director: savedDirectior });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await director.find();
    if (data) {
      return res.status(200).send({ success: true, directors: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data Not Found" });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ success: false, msg: "Cannot get All Movies" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const result = await director.deleteOne(filter);
  try {
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
      .send({ success: false, msg: "Cannot delete the movie" });
  }
});

module.exports = router;
