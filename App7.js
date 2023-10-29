require("dotenv").config();

const Server = require("./models/Server6");
const server = new Server();
server.listen();
