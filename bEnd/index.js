const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv/config");
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Hello World....");
});

// user routes
const userRoute = require("./routes/user");
app.use("/api/users/", userRoute);

// Movies Routes
const moviesRoutes = require("./routes/movies");
app.use("/api/movies/", moviesRoutes);

// Directors Routes
const directorRoutes = require("./routes/director");
app.use("/api/director/", directorRoutes);

// Actor Routes
const actorRoute = require("./routes/actor");
app.use("/api/actor/", actorRoute);

// Actress Routes
const actressRoute = require("./routes/actress");
app.use("/api/actress/", actressRoute);

// Genre Routes
const genreRoute = require("./routes/genre");
app.use("/api/genre/", genreRoute);

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (e) => console.log(`ERROR: ${e}`));

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening to port 4000");
});
