const {pool} = require("../database")
const jwt = require("jsonwebtoken");

const secret = "adgfdhgASd3453jgk246jh234jkhg234kjh346"

/**
 * Get all posts from database, sorted by timestamp in descending order (the latest posts are at the top)
 *
 * Example:
 *
 * GET http://localhost:3000/api/posts
 */
const getPosts = (req, res) => {
    pool.query('SELECT posts.id, post, created_at, likes, users.username, image_link FROM POSTS JOIN users ON users.id = user_id' +
        ' ORDER BY created_at DESC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(results['rows'])
    })
}

/**
 * Adds a post defined in the request body to the database.
 * <p>
 * Example:
 * <p>
 * POST http://localhost:3000/api/posts
 * <p>
 * Request body:
 * <p>
 * {
 *   "post" : "a post",
 *   "user" : 2,
 *   "image": null
 * }
 *
 *
 *
 */
const addPost = (req, res) => {
    const {post} = req.body

    const token = req.cookies.jwt
    if (!token) {
        res.sendStatus(400)
    }

    const data = jwt.verify(token, secret)
    const user = data.id

    pool.query('INSERT INTO posts (post, user_id) VALUES ($1, $2) RETURNING *', [post, user],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(201).send("created new post")
        })
}

/**
 * GETs a post by ID specified in request parameters
 *
 * Example:
 *
 * GET http://localhost:3000/api/posts/3
 *
 * @param req
 * @param res
 */
const getPostById = (req, res) => {
    const postId = req.params.postId
    pool.query('SELECT * FROM posts WHERE id = $1', [postId],
        (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).send(results["rows"])
        }
    )
}

module.exports = {getPosts, addPost, getPostById}
