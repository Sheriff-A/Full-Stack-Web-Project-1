// const e = require('express')
const db = require('../models') // Auto Calls index.js
const Drinks = db.drinks
const Op = db.Sequelize.Op // Sequelize Query Operator

exports.create = (req, res) => {
    // Validate Request
    // Make sure there is a name
    if(!req.body.name){
        res.stats(400).send({
            message: 'name cannot be empty'
        })
        return
    }

    // Since the database is type restricted, all we need to do is logic check the price
    // If a price is provided, take the max between the price and 0 (this removes negative numbers)
    // If no price is provided, I guess it's free lol
    var price = req.body.price ? Math.max(0.00, req.body.price) : 0.00
    // Make Drink
    const drink = {
        name: req.body.name,
        description: req.body.description,
        price: price,
        avail: !req.body.avail ? true : req.body.avail // Only need to provide if the drink is not available
    }

    // Save the Drink in the database
    Drinks.create(drink)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating this drink'
            })
        })
}