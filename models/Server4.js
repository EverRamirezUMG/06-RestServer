const cors = require("cors");
const express = require("express");

class Server {
  constructor() {
    //sirve para iniciar las propiedades del servidor
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api0/usuarios";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
