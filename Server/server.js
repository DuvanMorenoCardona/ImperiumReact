/*  Inicializo los modulos que necesito, para crear el servidor y 
    conectarme a una base de datos mysql, ademas de 
*/
var mysql = require("mysql");
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.static("Cliente"));

server.listen(8090, () => {
  console.log("Hola :8090");
});

var con = mysql.createPool({
  connectionLimit: 500,
  host: "localhost",
  port: "3306",
  user: "paja",
  password: "12345",
  database: "compuFisica"
});

io.on("connection", function(socket) {
  console.log("Me conecte al nodo " + socket.handshake.address);

  socket.on("inicio", data => {
    var sqlSelect =
      "SELECT usuario , clave FROM Usuarios WHERE usuario ='" +
      data.usuario +
      "' AND clave = '" +
      data.clave +
      "'";

    con.getConnection(function(error, tempCont) {
      if (error) {
        console.log("error coneccion DB");
      } else {
        console.log("Connected DB!");
        tempCont.query(sqlSelect, function(error, rows, field) {
          if (!!error) {
            console.log("error en el query");
          } else {
            tempCont.release();
            var entre = false;
            if (rows.length > 0) {
              console.log(rows);
              entre = true;
            } else {
              var entre = false;
            }
            //envio un true si el usuario esta en la base de datos y false si el usuario no esta en la base de datos
            socket.emit("entrar", entre);
          }
        });
      }
    });
  });
});
