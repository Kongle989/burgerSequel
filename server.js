var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express(),
    PORT = process.env.PORT || 7777,
    route = require('./controllers/burgers_controller.js'),
    exphbs = require("express-handlebars"),
    db = require("./models");

// DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride('_method'));
// Static directory
app.use(express.static(__dirname + "/public"));

app.use("/", route);
app.use("/update", route);
app.use("/create", route);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// LISTEN TO ME
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});