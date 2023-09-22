const mongoose = require("mongoose");

const directorSchema = mongoose.Schema(
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

module.exports = mongoose.model("director", directorSchema);
