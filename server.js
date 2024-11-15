const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");



require("dotenv").config();

const app = express();
app.use(cookieParser());





// Mongoose Connection
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Express Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css/"));
app.use("/js", express.static(__dirname + "/public/js/"));
app.use("/img", express.static(__dirname + "/public/img/"));
app.use("/assets", express.static(__dirname + "/assets/"));





// Express Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/index"));
app.use("/user", require("./routes/users"));
app.use("/menu", require("./routes/menu"));
app.use("/cart", require("./routes/cart"));
app.use("/orders", require("./routes/orders"));

// Start Server
connectDatabase().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
