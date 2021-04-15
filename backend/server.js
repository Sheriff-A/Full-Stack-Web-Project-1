const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Express Backend Web App Framework
const app = express()

// Restrict Access to this Origin
var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// Parse the http body in json format
app.use(bodyParser.json())

// Parse requests of content-type - application/x-www-form-urlencoded
// Not sure if need...
// app.use(bodyParser.urlencoded({extended: true}))

// Database
const db = require('./app/models') // Auto Calls index.js

// Sync **ALL** tables
// Call the exact model .sync() to sync only THAT model/ table
db.sequelize.sync()

// For production?
// sync({force: true}) DROPS the table and RECREATES IT
// db.sequelize.sync({force: true}).then(() =>{
//     console.log('Drop and Re-Sync DB.')
// }) 

// Simple Root Route
app.get('/', (req, res) => {
    res.json({
        message: 'Manshari\'s Application is Live'
    })
})

// Routes
require('./app/routes/routes.general')(app)

// Set port and listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})

