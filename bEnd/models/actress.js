const mongoose = require("mongoose");

const actressSchema = mongoose.Schema(
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

module.exports = mongoose.model("actress", actressSchema);
