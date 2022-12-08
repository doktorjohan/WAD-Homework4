const {pool} = require("../database")

/**
 * Get all posts from database, sorted by timestamp in descending order (the latest posts are at the top)
 *
 * Example:
 *
 * GET http://localhost:3000/api/posts
 */
const getPosts = (req, res) => {
    pool.query('SELECT * FROM POSTS ORDER BY created_at DESC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(results["rows"])
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
    const {post, user, image} = req.body
    console.log(post)
    console.log(user)
    console.log(image)

    pool.query('INSERT INTO posts (post, user_id, image_link) VALUES ($1, $2, $3) RETURNING *', [post, user, image],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(201).send("created new post")
        })
}

/**
 * Increases the likes counter of a post by 1. The post is defined in the request parameters
 * <p>
 * Example:
 * <p>
 * PUT http://localhost:3000/api/posts/likes/3
 *
 */
const addLikeToPost = (req, res) => {
    const postId = req.params.postId
    pool.query('UPDATE posts SET likes = likes+1 WHERE id = $1', [postId],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send("post likes updated")
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

module.exports = {getPosts, addLikeToPost, addPost, getPostById}
