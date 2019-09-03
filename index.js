const express = require("express");
require("./models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require('passport');
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI)

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session())

authRoutes(app);

const PORT = process.env.PORT || 5000;

// client id - 504929801028-5ref6hljlhoe96ncor88arrrc2fiv509.apps.googleusercontent.com
// client secret - 49QLEmH2PuXgf6wm8u-MxpeQ




app.listen(PORT);
