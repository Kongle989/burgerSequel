module.exports = function (sequelize, DataTypes) {
    var Eater = sequelize.define("Eater", {
            name: DataTypes.STRING
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