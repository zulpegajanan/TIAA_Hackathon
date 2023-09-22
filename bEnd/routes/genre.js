const router = require("express").Router();

const genre = require("../models/genre");

router.post("/save", async (req, res) => {
  const newgenre = genre({
    name: req.body.name,
    image_url: req.body.image_url,
  });
  try {
    const savedGenre = await newgenre.save();
    return res.status(200).send({ success: true, genre: savedGenre });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await genre.find();
    if (data) {
      return res.status(200).send({ success: true, genres: data });
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
  const result = await genre.deleteOne(filter);
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
