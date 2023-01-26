const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan"); 
const multer = require("multer");
const path = require("path");
//create new instance of express app
const app = express();
//allow using a .env file
require("dotenv").config();

mongoose.set('strictQuery', false);
//sets up mongoose for the mongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//declare port number for the api
const PORT = process.env.PORT || 8800;

//setup middleware
app.use(express.json());
app.use(morgan("common"));
app.use(helmet({ crossOriginResourcePolicy: false, }));
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully.");
  } catch(err) {
    console.error(err);
  }
});

//import routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//setup middleware for routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
    console.log("Backend server is running on port: ", PORT);
});