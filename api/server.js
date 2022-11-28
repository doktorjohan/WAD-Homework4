const express = require('express');
const pool = require('./database');
const cors = require('cors')
const {getPosts} = require("./database");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'hoot://localhost:8080' , credentials: true}));

// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cookieParser());

// request handling will go here
app.get('/api/posts', getPosts)

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
