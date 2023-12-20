const express = require("express");
const router = express.Router()


const { setData, getData, getSingleData, editData, deleteData } = require("../controllers/DataController");



router.post("/set-data", setData)

router.get("/get-data", getData)

router.get("/get-single-data/:id", getSingleData)

router.put("/edit-data/:id", editData)

router.delete("/delete-data/:id", deleteData)


module.exports = router;