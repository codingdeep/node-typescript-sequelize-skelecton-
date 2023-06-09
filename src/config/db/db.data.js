require('dotenv').config()
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "localhost",
        dialect: "postgres",
        port: process.env.DB_PORT
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "localhost",
        dialect: "postgres",
        port: process.env.DB_PORT
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        dialect: "postgres",
        port: process.env.DB_PORT
    }
}