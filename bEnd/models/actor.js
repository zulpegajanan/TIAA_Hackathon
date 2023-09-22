const mongoose = require("mongoose");

const actorSchema = mongoose.Schema(
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

module.exports = mongoose.model("actors", actorSchema);
