const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {pool} = require("../database");

const secret = "adgfdhgASd3453jgk246jh234jkhg234kjh346"
const maxAge = 60 * 60

const generateJWT = (id) => {
    return jwt.sign({id}, secret, { expiresIn: maxAge })
}

/**
 * Checks if user is authenticated
 *
 * Get http://localhost:3000/auth/authenticate
 *
 */
const authenticateUser = async (req, res) => {
    const token = req.cookies.jwt

    let authenticated = false;

    try {
        if (token) {
            await jwt.verify(token, secret, (err) => {
                if (err) {
                    console.log(err.message)
                    res.send({"authenticated": authenticated})
                } else {
                    authenticated = true
                    res.send({"authenticated": authenticated})
                }
            })
        } else {
            res.send({authenticated: authenticated})
        }

    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }

}

/**
 * Adds a user defined int the request body to the database
 *
 * POST http://localhost:3000/auth/signup
 *
 * Request body:
 *
 * {
 *   "username" : "user2",
 *   "password" : "password2"
 * }
 *
 * Username == email
 *
 * Keep in mind that usernames are **UNIQUE**
 *
 */
const createNewUser = async(req, res) => {

    try {

        const {email, password} = req.body

        const salt = await bcrypt.genSalt()
        const bcryptPassword = await bcrypt.hash(password, salt)

        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(username, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );

        const token = await generateJWT(authUser.rows[0].id)

        res.status(200)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true})
            .json({userId: authUser.rows[0].id})
            .send()

    } catch (err) {
        console.error(err.message)
        res.status(400).send(err.message)
    }

}

/**
 * Logs in user specified in request body. Returns user's userId if everything OK
 *
 * POST http://localhost:3000/auth/login
 *
 */
const loginUser = async(req, res) => {
    try {

        const { email, password } = req.body
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [email])
        console.log(user.rows[0].id)

        if (user.rows.length === 0) {
            return res.status(401).json({ error: "User is not registered" })
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password)

        if (!validPassword) {
            return res.status(401).json({ error: "Incorrect password", success: false })
        }

        const token = await generateJWT(user.rows[0].id)
        res.status(201)
            .cookie('jwt', token, {maxAge: 6000000, httpOnly: true})
            .json({ userId: user.rows[0].id, success: true })
            .send()

    } catch (err) {
        res.status(401).json({ error: err.message, success: false })
    }
}

/**
 * Logs out user. Clears cookies
 *
 * Get http://localhost:3000/auth/logout
 *
 */
const logoutUser = (req, res) => {
    res.status(202).clearCookie('jwt').json({ "Message": "cookie cleared" })
}

module.exports = {authenticateUser, createNewUser, loginUser, logoutUser}
