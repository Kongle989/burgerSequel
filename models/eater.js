module.exports = function (sequelize, DataTypes) {
    var Eater = sequelize.define("Eater", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Eater.hasMany(models.Burger, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Eater;
};