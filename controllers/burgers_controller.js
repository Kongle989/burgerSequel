var db = require('../models'),
    express = require("express"),
    router = express.Router();

router.get('/', function (req, res) {
    db.Burger.findAll({
        order: '`burger_name` ASC'

    }).then(function (dbBurger) {
        var hbsOb = {
            burgers: dbBurger
        };
        res.render('index', hbsOb);
    })
});

router.post("/", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger
    }).then(function (dbBurger) {
        res.redirect('/');
    })
});

router.put("/:id", function (req, res) {
    db.Burger.update(
        {
            devoured: req.body.devoured
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function (dbBurger) {
            res.redirect('/');
        });
});

module.exports = router;