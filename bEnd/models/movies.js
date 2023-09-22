const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const moviesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    trailer_url: {
      type: String,
      required: true,
    },
    actor: {
      type: String,
    },
    actress: {
      type: String,
    },
    Villan: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
    movie_duration: {
      type: String,
    },
    budget: {
      type: String,
      required: true,
    },
    official_collection: {
      type: String,
      required: true,
    },
    genre: {
      type: [String],
    },
    directors: {
      type: [String],
    },
    ratings_per_user: {
      type: [Number],
    },
    tags: {
      type: [String],
    },
    awards: {
      type: [String],
    },
    reviews: {
      type: [commentsSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", moviesSchema);
