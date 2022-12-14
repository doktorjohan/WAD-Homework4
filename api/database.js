const Pool = require('pg').Pool;
require('dotenv').config({path: "./.env"})
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "testWad",
    host: "localhost",
    port: 5432
});

console.log(process.env.USERNAME)

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
      "likes" integer DEFAULT (0),
      "user_id" int,
      "image_link" varchar,
      CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE SET NULL
);
`

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS "users" (
      "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      "username" varchar UNIQUE NOT NULL,
      "password" varchar NOT NULL
    );
`

execute(createUsersTable).then(result => {
    if (result) {
        console.log('created users table')
        execute(createPostsTable).then(result => {
            if (result) {
                console.log('created posts table')
            }
        })
    }
})

module.exports = {pool};
