//Dependencies
const express = require("express");

const hbars = require("express-handlebars");

const PORT = process.env.PORT || 8080;

//Start server
const app = express();

//Express assets config
app.use(express.static('public'));

//Express post config
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Handlebars config
app.engine("handlebars", hbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars")

//require Database
const db = require("./models")
require("./routes/routes")(app)


db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
    })
})