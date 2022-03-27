const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const bodyparser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: true,
}));

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,PATCH,DELETE",
        credentials: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Server is working!!!");
});
