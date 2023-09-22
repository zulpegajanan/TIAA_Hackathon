const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  movie_id: {
    type: String,
  },
  review: {
    type: String,
  },
});

const ratingSchema = mongoose.Schema({
  movie_id: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const usersSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
    },
    likes: {
      type: [String],
    },
    dislike: {
      type: [String],
    },
    reviews: {
      type: [reviewSchema],
    },
    ratings: {
      type: [ratingSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", usersSchema);
