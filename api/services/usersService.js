const {pool} = require("../database")

/**
 * Fetches all users from the database. Used for testing purposes ONLY.
 *
 * GET http://localhost:3000/api/users
 *
 */
const getUsers = (req, res) => {
    pool.query('SELECT * FROM USERS', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(results["rows"])
    })
}

/**
 * GETs user from database by id defined in request parameters
 *
 * Example:
 *
 * GET http://localhost:3000/api/users/3
 *
 */
const getUserByUserId = (req, res) => {
    const userId = req.params.userId

    pool.query('SELECT * FROM users WHERE id = $1', [userId],
        (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).send(results["rows"])
        }
    )
}

module.exports = {getUsers, getUserByUserId}

