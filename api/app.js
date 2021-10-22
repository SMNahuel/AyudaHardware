const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const findUserMiddleware = require("./middlewares/findUser");

const { Sequelize } = require("./models");
const app = express();

app.use(cors()); //Habilitamos peticiones (GET - PUT - POST - DELETE)
app.use(logger("dev")); //Muestra peticiones
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // ?

//Conect to BD
const sequelize = new Sequelize("test", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: 0,
});

//sequelize se autentica con la BD MySql
sequelize
  .authenticate()
  .then(function () {
    console.log("Connect");
  })
  .catch(function (error) {
    console.log("error: " + error);
  });

//Defino las rutas

app.use("/user", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
app.use("/post", require("./routes/post"));
app.use("/part", require("./routes/getComponent"));
app.use("/perfomance", require("./routes/perfomance"));

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
