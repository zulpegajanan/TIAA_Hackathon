const mongoose = require("mongoose");

const genreSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  { TimeStamps: true }
);

module.exports = mongoose.model("genre", genreSchema);
