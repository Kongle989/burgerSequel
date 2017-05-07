var db = require('../models'),
    express = require("express"),
    router = express.Router();

router.get('/', function (req, res) {
    db.Burger.findAll().then(function (dbBurger) {
        var hbsOb = {
            burgers: dbBurger
        };
        console.log("24\n"+JSON.stringify(hbsOb));
        res.render('index', hbsOb);
    })
});

router.post("/", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger,
        devoured: req.body.devoured
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