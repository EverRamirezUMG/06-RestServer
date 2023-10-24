require("dotenv").config();
const Server = require("./models/Server2");
const server = new Server();
server.listen();
