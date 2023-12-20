const express = require("express");
const router = express.Router()

const { loginUser, signupUser, getUser } = require("../controllers/UserController")
const validateToken = require("../middleware/validateToken")



router.post("/signup", signupUser)

router.post("/login", loginUser)


router.get('/validate', validateToken, getUser)

//     (req, res) => {
//     res.status(200).json({ message: 'validated successful', user: req.user })
// }


module.exports = router;