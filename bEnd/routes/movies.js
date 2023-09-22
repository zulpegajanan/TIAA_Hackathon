const router = require("express").Router();

const movies = require("../models/movies");

router.post("/save", async (req, res) => {
  const newMovie = movies({
    title: req.body.title,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
    actor: req.body.actor,
    actress: req.body.actress,
    Villan: req.body.Villan,
    releaseDate: req.body.releaseDate,
    movie_duration: req.body.movie_duration,
    budget: req.body.budget,
    official_collection: req.body.official_collection,
    genre: req.body.genre,
    directors: req.body.directors,
    tags: req.body.tags,
    awards: req.body.awards,
    likes: 0,
    dislikes: 0,
  });
  try {
    const savedMovie = await newMovie.save();
    return res.status(200).send({ success: true, movie: savedMovie });
  } catch (e) {
    return res.status(400).send({ success: false, msg: e });
  }
});



router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const data = await movies.findOne(filter);
    if (data) {
      return res.status(200).send({ success: true, movie: data });
    } else {
      return res.status(400).send({ success: false, msg: "Data Not Found" });
    }
  } catch (e) {
    return res.status(400).send({ success: false, msg: "Cannot get OneData" });
  }
});




router.get("/getAll", async (req, res) => {
  try {
    const data = await movies.find();
    if (data) {
      return res.status(200).send({ success: true, movies: data });
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
  const result = await movies.deleteOne(filter);
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

router.put("/like/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await movies.findByIdAndUpdate(
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
    const result = await movies.findByIdAndUpdate(
      filter,
      {
        dislikes: req.body.dislikes,
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
    const result = await movies.findByIdAndUpdate(
      filter,
      {
        ratings_per_user: req.body.ratings_per_user,
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
    const result = await movies.findByIdAndUpdate(
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

module.exports = router;
