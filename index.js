const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.port || 2222;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running " + port);
});