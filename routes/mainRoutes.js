const path = require("path");

const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/index", mainController.getIndex);

router.get("/landing", mainController.getLanding);

router.get("/myprofile", mainController.getMyProfile);

router.get("/timesheets", mainController.getTimesheets);

router.get("/annualleave", mainController.getAnnualLeave);

router.get("/calendar", mainController.getCalendar);

module.exports = router;
