require("dotenv").config();
//This line loads and configures the dotenv module, which allows you to load environment variables from a .env file into the process.env object.

// The BIG 3
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// pulls our mongoose connection into application
const connectToDb = require("./config/connectToDb");

//------------------------------------------[Requirements/Middlewa/re]
// const Assignment = require("./models/assignments");
// const Student = require("./models/students");
// const Grade = require("./models/grades");
// const studentsController = require("./controllers/studentsController");
app.use(express.urlencoded({ extended: true }));
// const gradesController = require("./controllers/gradesController");
// const assignmentsController = require("./controllers/assignmentsController");
const gradesRouter = require("./routes/grades");
const assignmentsRouter = require("./routes/assignments");
const studentsRouter = require("./routes/students");
// used to enable Cross-Origin Resource Sharing (CORS) in your Express application
const cors = require("cors");
app.use(express.json());

app.use(cors());
// invoke function
connectToDb();

//------------------------------------------[Routing]
app.get("/", (req, res) => {
    res.json("This is a Landing Page")
});
//_________________________________________________________________________________
// //------------------------------------------[GET all students - READ]
// app.get("/students", studentsController.fetchAllStudents);
// //------------------------------------------[GET specific student by ID - READ]
// app.get("/students/:id", studentsController.fetchStudent);
// //------------------------------------------[POST new student - CREATE]
// app.post("/students", studentsController.createStudent);
// //------------------------------------------[PUT new student - UPDATE]
// app.put("/students/:id", studentsController.updateStudent);
// //------------------------------------------[DELETE a student - DELETE]
// app.delete("/students/:id", studentsController.deleteStudent);
//_________________________________________________________________________________
// //------------------------------------------[GET all grades - READ]
// app.get("/grades", gradesController.fetchAllGrades);
// //------------------------------------------[GET specific grade by ID - READ]
// app.get("/grades/:id", gradesController.fetchGrade);
// //------------------------------------------[POST new grade - CREATE]
// app.post("/grades", gradesController.createGrade);
// //------------------------------------------[PUT new grade - UPDATE]
// app.put("/grades/:id", gradesController.updateGrade);
// //------------------------------------------[DELETE a grade - DELETE]
// app.delete("/grades/:id", gradesController.deleteGrade);
//_________________________________________________________________________________
//------------------------------------------[GET all assignments - READ]
// app.get("/assignments", assignmentsController.fetchAllAssignments);
// //------------------------------------------[GET specific assignment by ID - READ]
// app.get("/assignments/:id", assignmentsController.fetchAssignment);
// //------------------------------------------[POST new assignment - CREATE]
// app.post("/assignments", assignmentsController.createAssignment);
// //------------------------------------------[PUT new assignment - UPDATE]
// app.put("/assignments/:id", assignmentsController.updateAssignment);
// //------------------------------------------[DELETE an assignment - DELETE]
// app.delete("/assignments/:id", assignmentsController.deleteAssignment);

app.use("/assignments", assignmentsRouter );
app.use("/grades", gradesRouter);
app.use("/students", studentsRouter);
//_________________________________________________________________________________

app.listen(PORT, () => {
    console.log(`Express Server Listening on port ${PORT}`);
});


