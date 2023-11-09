require("dotenv").config();
const Server = require("./models/Server710");
const server = new Server();
server.listen();
