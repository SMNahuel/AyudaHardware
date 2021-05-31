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
//Cookise session
/* app.use(cookieSession({
    name: 'session',
    keys: ['user', 'session']
})) */

app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000")
});

