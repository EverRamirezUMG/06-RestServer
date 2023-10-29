const express = require("express");
const cors = require("cors");
const { dbconection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api0/usuarios";

    // Conectar a base de datos
    this.conectarDB();
    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  //base de datos
  async conectarDB() {
    await dbconection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;