// General Router File
// Maybe seperate routers into seperate files and combine here?

module.exports = app => {
    // Router for.. routing... http requests
    var router = require('express').Router()

    // ----- DRINK ROUTES -----

    // Drink Controller
    const drinks = require('../controllers/controller.drink')

    // Create a new drink
    router.post('/add', drinks.create)

    // ----- CONTACT ROUTES -----
    const contact = require('../controllers/controller.contact')

    // Send Email With Contact Info
    router.post('/contact', contact.send)

    // 
    app.use('/api', router)
}