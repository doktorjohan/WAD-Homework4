const {pool} = require("../database")

const getPosts = (req, res) => {
    pool.query('SELECT * FROM POSTS ORDER BY created_at DESC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(results["rows"])
    })
}


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
