module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Burger.belongsTo(models.Eater, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Burger;
};