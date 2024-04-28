const express = require("express"); 
const assignmentsController = require("../controllers/assignmentsController");

const router = express.Router();

router.get("/", assignmentsController.fetchAllAssignments);
//------------------------------------------[GET specific assignment by ID - READ]
router.get("/:id", assignmentsController.fetchAssignment);
//------------------------------------------[POST new assignment - CREATE]
router.post("/", assignmentsController.createAssignment);
//------------------------------------------[PUT new assignment - UPDATE]
router.put("/:id", assignmentsController.updateAssignment);
//------------------------------------------[DELETE an assignment - DELETE]
router.delete("/:id", assignmentsController.deleteAssignment);


module.exports = router;