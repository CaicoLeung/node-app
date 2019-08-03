const http = require('http');
const querystring = require('querystring');

function serverCallback(req, res) {
  const reqMethod = req.method.toLowerCase();
  switch (reqMethod) {
    case 'get': 
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write('<h1>Hello NodeJs!</h1>');
      res.end();
      break;
    case 'post':
      let data = '';
      req.on('data', function (chunk) {
        console.log('chunk: ', chunk.toString());
        data += chunk;
      });
      req.on('error', function (err) {
        console.error(err);
      });
      req.on('end', function () {
        let result = querystring.parse(data);
        console.log('result: ', JSON.stringify(result));
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end()
      });
      break;
    default:
      throw Error('不存在此方法')
  }
  
}

http.createServer(serverCallback).listen(3000);