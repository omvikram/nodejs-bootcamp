const http = require('http');

const server = http.createServer(function (req, res) {

  if(req.url == "/")
  {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
  }
  if(req.url == "/apps")
  {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('This app is working!!');
    res.end();
  }
})

server.listen(8080);