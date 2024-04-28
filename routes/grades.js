const express = require("express");
const gradesController = require("../controllers/gradesController");

const router = express.Router();

//------------------------------------------[GET all grades - READ]
router.get("/", gradesController.fetchAllGrades);
//------------------------------------------[GET specific grade by ID - READ]
router.get("/:id", gradesController.fetchGrade);
//------------------------------------------[POST new grade - CREATE]
router.post("/", gradesController.createGrade);
//------------------------------------------[PUT new grade - UPDATE]
router.put("/:id", gradesController.updateGrade);
//------------------------------------------[DELETE a grade - DELETE]
router.delete("/:id", gradesController.deleteGrade);

module.exports = router;