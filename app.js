const express = require("express");
const mysql = require("mysql");
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'hbs');

db.connect((error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("MySQL Conectada...")
        }
})
    //defino las rutas
app.use('/', require('./routes/paginas'));
app.use('/auth', require('./routes/auth'));


app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000")
});