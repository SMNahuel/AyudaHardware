const express = require("express");
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const { Sequelize } = require('./models')
const path = require('path');
const publicDirectory = path.join(__dirname, './public');

const app = express();

app.use(express.static(publicDirectory));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'hbs');

//Conect to BD
const sequelize = new Sequelize('test', 'root', '', {
    host: "127.0.0.1",
    dialect : 'mysql',
    operatorsAliases: false
});
sequelize.authenticate().then(function(){
    console.log("Connect");
  }).catch(function(error){
    console.log("error: "+error);
});

//defino las rutas
app.use('/', require('./routes/paginas'));
app.use('/auth', require('./routes/auth'));
app.use('/cpu/', require('./routes/getComponent'));
app.use('/gpu/', require('./routes/getComponent'));
app.use('/perfomance', require('./routes/perfomance'));

app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000")
});


/* const mysql = require("mysql"); */
/* 
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); */
/* db.connect((error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("MySQL Conectada...")
        }
}) */
