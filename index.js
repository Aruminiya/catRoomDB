const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");

const server = jsonServer.create(); // 创建JSON Server 实例
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.db = router.db; // 将路由的数据库对象添加到JSON Server实例

// 在您的路由之前添加身份验证和授权
server.use(jsonServerAuth);

server.use(router);

server.listen(port);
