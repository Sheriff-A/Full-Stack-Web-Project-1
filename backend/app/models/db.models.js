module.exports.Drinks = (Sequelize, sequelize) => {
    const Drinks = sequelize.define('Drink', {
        // ID is auto key and auto incremented
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(8000)
        },
        price: {
            type: Sequelize.DOUBLE(6, 2)
        },
        avial: {
            type: Sequelize.BOOLEAN
        } // , {timestamps: false}
    })
    return Drinks
}