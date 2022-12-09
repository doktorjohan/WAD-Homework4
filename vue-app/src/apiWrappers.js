/**
 * Finds user by userId
 * @param userId id of the user to be fetched
 */
export function getUserById(userId) {
    let returnData = {}
    fetch(`http://localhost:3000/api/users/:${userId}`, {
        credentials: "include"
    })
        .then((response) => response.json())
        .then((data) => returnData = data)
        .catch((err) => {
            console.log(err)
        })
    return returnData
}

/**
 * Fetches all posts from database. Posts are sorted newest at the top
 */
export async function getAllPosts() {
    let returnData = null
    await fetch("http://localhost:3000/api/posts", {
        credentials: "include"
    })
        .then((response) => response.json())
        .then((data) => returnData = data)
        .catch((err) => {
            console.log(err)
        })
    console.log(returnData)
    return returnData
}

/**
 * Increases a post's like counter by 1
 * @param postId the id of the post that was liked
 */
export function increasePostLikes(postId) {
    let success = false
     fetch(`http://localhost:3000/api/posts/likes/:${postId}`, {
        credentials: "include",
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        }
    })
        .then((response) => {
            if (response.status === 200) {
                success = true
            }
        })
        .catch((err) => {
            console.log(err)
        })
    return success
}

/**
 *  Fetches a single post by postId
 *  @param postId the id of the post to be fetched
 */
export async function getPostById(postId) {
    let returnData = {}
    await fetch(`http://localhost:3000/api/posts/:${postId}`, {
        credentials: "include"
    })
        .then((response) => response.json())
        .then((data) => {
            returnData = data
        })
        .catch((err) => {
            console.log(err)
        })
    return returnData
}

/**
 * Adds a new post to the database
 * @param postData post data in JSON format
 */
export async function addNewPost(postData) {
    let success = false
    await fetch("http://localhost:3000/api/posts", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then((response) => {
            if (response.status === 201) {
                success = true
            }
        })
    return success
}
