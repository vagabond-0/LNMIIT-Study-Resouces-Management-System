const express = require("express");
const router = express.Router();
const {
    addOrUpdateGradeSurvey,
    getGradeSurveysByCourseName,
} = require("../controllers/GradeSurvey");

const { auth, isAdmin } = require("../middleware/auth");

// POST: Add or update a grade survey (Only authenticated users)
router.post("/add-or-update", auth, addOrUpdateGradeSurvey);

// GET: Fetch grade surveys by course name (Only authenticated users)
router.get("/:courseName", auth, getGradeSurveysByCourseName);

module.exports = router;