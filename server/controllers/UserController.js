const User = require("../models/UserModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports = {
    //@descrp -- to register a user
    //@route -- POST /api/user/signup
    //@access -- public
    signupUser: async (req, res, next) => {
        console.log(req.body);

        const { username, email, password } = req.body;
        try {
            if (!username || !email || !password) {
                res.status(400)
                throw new Error("All fields are mandotory")
            }
            // let emailValidated = await emailValidator.validate(email)
            // console.log(emailValidated);



            // let verifier = new Verifier("at_rY6II9akNymZf3gYu4aoeWLJVlgz0");
            // verifier.verify(email, (err, data) => {
            //     if (err) throw err;
            //     console.log(data);
            // })
            // return res.status(200)

            const userExist = await User.findOne({ email })
            if (userExist) {
                // console.log(userExist)
                res.status(400);
                throw new Error("Email already exist")
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                username,
                email,
                password: hashPassword
            })

            if (user) {
                res.json({ message: "Register the user successfully", _id: user._id, email: user.email })
            } else {
                res.status(400)
                throw new Error(user)
            }
        } catch (err) {
            if (err.name == 'ValidationError') res.status(400)
            next(err)
        }

    },

    //@descrp -- to login a user
    //@route -- POST /api/user/login
    //@access -- public
    loginUser: async (req, res, next) => {
        console.log(req.body);
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                res.status(400);
                throw new Error("All fields are mandatory")

            }
            const userExist = await User.findOne({ email });
            console.log(userExist);
            if (userExist && await bcrypt.compare(password, userExist.password)) {
                const accessToken = jwt.sign(
                    {
                        user: {
                            username: userExist.username,
                            email: userExist.email,
                            userId: userExist._id
                        }
                    },
                    process.env.ACCESS_TOKEN_SECERT,
                    {
                        expiresIn: '100m'
                    }
                )
                const user = {
                    username: userExist.username,
                    userId: userExist._id,
                    accessToken
                }
                console.log('#############');

                res.status(200).json({ message: "Login the user hello", user })
            } else {
                res.status(401);
                throw new Error("Wrong password or email");
            };
        } catch (err) {
            if (err.name == 'ValidationError') res.status(400)
            next(err)
        }
    },

    getUser: async (req, res, next) => {
        console.log(req.params);
        try {
            let user = await User.findOne({ _id: req.params.userId }, { password: 0 })
            res.status(200).json({ message: "request successful", user })
        } catch (error) {
            next(error)
        }
    },
}