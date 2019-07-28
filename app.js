const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // Now what this will do is it will attach a header to our response where we basically pass some meta information saying that the type of the content which will also be part of the response is html.
  res.setHeader('Content-Type', 'text/html');
  // write allows us to write some data to the response and this basically works in chunks you could say or in multiple lines,
  // On both requests and responses, Http headers are added to transport metadata from A to B.
  // The following article provides a great overview of available headers and their role: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  // Whilst this article is a great resource, especially to dive deeper, please don't learn this list by heart though! You'll encounter many of these headers throughout the course and I'll explain them when we need them.
  res.write('<h1>Hello from my nodejs server</h1>');
  res.end();
  // Process.exit basically hard exited our event loop and therefore the program shuts down because there was no more work to do,
  // process.exit();
});

server.listen(3000, () => {
  console.log('server is listeneng on port 3000');
});

