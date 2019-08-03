const http    = require("http");
const fs      = require("fs");

function serverCallback(req, res) {
	const readStream = fs.createReadStream('./files/main.html');
	res.writeHead(200, {
		'Content-type': 'text/html'
	});
	readStream.pipe(res);
}

http.createServer(serverCallback).listen(8081);