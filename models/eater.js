module.exports = function (sequelize, DataTypes) {
    var Eater = sequelize.define("Eater", {
            // Giving the Author model a name of type STRING
            name: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    // Associating Author with Posts
                    // When an Author is deleted, also delete any associated Posts
                    Eater.hasMany(models.Burger, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Eater;
};
