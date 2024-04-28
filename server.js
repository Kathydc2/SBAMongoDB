require("dotenv").config();
//This line loads and configures the dotenv module, which allows you to load environment variables from a .env file into the process.env object.

// The BIG 3
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// pulls our mongoose connection into application
const connectToDb = require("./config/connectToDb");

//------------------------------------------[Requirements/Middlewa/re]
app.use(express.urlencoded({ extended: true }));
const gradesRouter = require("./routes/grades");
const assignmentsRouter = require("./routes/assignments");
const studentsRouter = require("./routes/students");
// used to enable Cross-Origin Resource Sharing (CORS) in your Express application
const cors = require("cors");
app.use(express.json());
app.use(cors());
// invoke function
connectToDb();

//------------------------------------------[Landing Page]
app.get("/", (req, res) => {
    res.json("This is a Landing Page")
});

// -----------------------------------------[Routes]
app.use("/assignments", assignmentsRouter );
app.use("/grades", gradesRouter);
app.use("/students", studentsRouter);

//-------------------------------------------[PORT]
app.listen(PORT, () => {
    console.log(`Express Server Listening on port ${PORT}`);
});


