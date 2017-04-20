var http = require('http');
var fs = require('fs');



var server = http.createServer(function (req, res) {
  console.log(`req was made: ${req.url}`);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } 
  else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } 
  else if (req.url === '/api/unicorns') {
    var unicorns = [{name: 'faa', age: 65465}, {name: 'sol', age: 4213}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(unicorns));
  } 
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');