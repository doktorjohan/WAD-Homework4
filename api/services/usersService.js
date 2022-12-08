const {pool} = require("../database")

const getUsers = (req, res) => {
    pool.query('SELECT * FROM USERS', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(results["rows"])
    })
}


const addUser = (req, res) => {
    const {username, password} = req.body
    pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username', [username, password],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(201).send("created new user")
        })
}

module.exports = {getUsers, addUser}