// const e = require("express");
const express = require("express");

class Server {
  constructor() {
    //sirve para iniciar las propiedades del servidor
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hello World");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
