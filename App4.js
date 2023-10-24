require("dotenv").config();
const Server = require("./models/Server3");
const server = new Server();
server.listen();
