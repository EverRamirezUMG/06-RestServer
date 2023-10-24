require("dotenv").config();
const Server = require("./models/Server4");
const server = new Server();
server.listen();
