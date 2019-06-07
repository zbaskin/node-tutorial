const http = require('http');
const port = 8080;

const server = http.createServer();

server.on('request', (req, res) => {
  const { headers, method, url } = req;
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    res.on('error', (err) => {
      console.error(err);
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>');

    res.end();

  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
