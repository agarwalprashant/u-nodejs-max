const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>Hello world</h1>');
  console.log('hi there')
  res.end();
});

server.listen(3000, () => {
  console.log('server is listeneng on port 3000');
});

