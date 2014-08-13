var Hapi = require('hapi');
var Primus = require('primus');
var PrimusResponder = require('primus-responder');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);
var primus = new Primus(server.listener, { transformer: 'websockets' });

primus.use('responder', PrimusResponder);

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: { file: './hello.html' }
});

server.route({
  method: 'GET',
  path: '/somejson',
  handler: function(request, reply) {
    reply({ status: 'ok' });
  }
});

primus.on('connection', function(spark) {
  console.log('ehlo');

  spark.on('request', function(req, res) {
    server.inject(req, res);
  });

  spark.on('data', function() {
    spark.write({ status: 'ok' });
  });
});

// Start the server
server.start();
