var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('data/db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api/v1', router);
server.listen(3000, function () {
    console.log('JSON Server is running');
});
