const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const appointRoutes = require('./routes/appointment');
const contactRoutes = require('./routes/contact');
const patientportRoutes = require('./routes/patientportal');
const updateformRoutes = require('./routes/updateform');
const videosRoutes = require('./routes/videos');
const authRoutes = require('./routes/auth');

// db.execute('');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(appointRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);
app.use(patientportRoutes);
app.use(updateformRoutes);
app.use(videosRoutes);
app.use(authRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = process.env.port || 3000;

sequelize
    .sync()
    .then(result => {

        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    });