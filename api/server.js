const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const {addPost, getPosts, getPostById, truncatePostsTable, deletePostById, updatePost} = require("./services/postsService")
const {getUsers, getUserByUserId} = require("./services/usersService")
const {authenticateUser, logoutUser, loginUser, createNewUser} = require("./services/userAuth")


const port = process.env.PORT || 3000;

const app = express();


// Fetch API in Vue needs to have credentials: include
app.use(cors({ origin: 'http://localhost:8080' , credentials: true}));

// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cookieParser());

// user authentication paths
app.get('/auth/authenticate', authenticateUser)
app.post('/auth/signup', createNewUser)
app.post('/auth/login', loginUser)
app.get('/auth/logout', logoutUser)

// request paths
app.get('/api/posts', getPosts)
app.get('/api/posts/:postId', getPostById)
app.get('/api/users', getUsers)
app.get('/api/users/:userId', getUserByUserId)
app.post('/api/posts', addPost)
app.delete('/api/posts/delete', truncatePostsTable)
app.delete('/api/posts/:postId', deletePostById)
app.put('/api/posts/:postId', updatePost)

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
