require("dotenv").config();
const Server = require("./models/Server711");
const server = new Server();
server.listen();
