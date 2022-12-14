/**
 * Finds user by userId
 * @param userId id of the user to be fetched
 */
export async function getUserById(userId) {
    let returnData = null
    await fetch(`http://localhost:3000/api/users/${userId}`, {
        credentials: "include"
    })
        .then((response) => response.json())
        .then((data) => returnData = data)
        .catch((err) => {
            console.log(err)
        })
    return returnData[0]
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
    return returnData
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

export async function deleteAllPosts() {
    let success = false
    await fetch("http://localhost:3000/api/posts/delete", {
        credentials: "include",
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}