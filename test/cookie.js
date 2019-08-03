const http    = require('http');
const url     = require('url');

function serverCallback(req, res) {
	const pathname = url.parse(req.url).pathname;
	switch (pathname) {
		case '/urldata':
			res.writeHead(200, {
				'Content-type': 'text/html',
				'Set-Cookie': ['sessionid=19930501', 'name=caicoLeung']
			});
			res.write('hello, nodejs~!');
			break;
		default:
			res.writeHead(404, {
				'Content-type': 'text/plain',
			});
			res.write('Error');
	}
	console.log(pathname);
	res.end();
}

http.createServer(serverCallback).listen(8081);