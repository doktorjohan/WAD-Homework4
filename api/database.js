const Pool = require('pg').Pool;
require('dotenv').config()
const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT
});

const execute = async (query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// create table queries

const createPostsTable = `
    CREATE TABLE IF NOT EXISTS "posts" (
      "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      "post" varchar NOT NULL,
      "created_at" timestamp DEFAULT (now()),
      "likes" integer,
      "user" int,
      "image_link" varchar
);
`

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS "users" (
      "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      "username" varchar UNIQUE NOT NULL,
      "password" varchar NOT NULL
    );
`

const addForeignKey = `
    ALTER TABLE "posts" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");
`

execute(createPostsTable).then(result => {
    if (result) {
        console.log('created posts table')
    }
})

execute(createUsersTable).then(result => {
    if (result) {
        console.log('created users table')
        execute(addForeignKey).then(result => {
            console.log('added foreign key to posts table')
        })
    }
})

// queries should go here like this
const getPosts = (req, res) => {
    pool.query('SELECT * FROM POSTS ORDER BY created_at DESC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results)
    })
}

//TODO:
// addPost
// signIn
// logOut
// deletePost
// deleteAllPosts


// export pool for now, queries later
module.exports = {pool, getPosts};
