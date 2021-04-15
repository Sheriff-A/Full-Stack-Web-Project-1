module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Root123!',
    DB: 'coffee-db',
    dialect: 'mysql',

    // Optional
    // The pool options are per sequelize instance per process
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}