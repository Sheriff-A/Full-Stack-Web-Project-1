const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')

// Log into the DB
// Need to make the Database ahead of time
// The tables can be created on the go
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    // Optional
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

// Dictionary to hold Sequelize, sequelize (DB) and the database tables
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Tables
// Drinks
db.drinks = require('./db.models').Drinks(Sequelize, sequelize)

// Export the DB Dictionary
module.exports = db