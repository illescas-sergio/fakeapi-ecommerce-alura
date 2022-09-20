const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
    static: "./build"
});
server.use(middlewares);
server.use(
    jsonServer.rewriter()
)
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
console.log(`JSON Server is running on port ${port}`);
});
