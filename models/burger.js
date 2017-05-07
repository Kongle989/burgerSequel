module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.STRING,
            defaultValue: "false"
        },
        eater: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

return Burger;

};