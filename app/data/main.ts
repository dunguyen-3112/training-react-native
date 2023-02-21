const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('data/db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use('/api/v1', router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
