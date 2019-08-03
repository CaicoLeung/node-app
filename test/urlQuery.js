const http           = require('http');
const url            = require('url');
const querystring    = require('querystring');

function serverCallback(req, res) {
	const urlData     = url.parse(req.url); // 结构化url内容， 变为js对象
	const pathname    = urlData.pathname;
	const query       = querystring.parse(urlData.query); // 结构化query内容， 变为js对象
	res.writeHead(200, { 'Content-type': 'text/html' });
	res.write(JSON.stringify(query) + `\n pathname: ${pathname}`);
	res.end();
}

http.createServer(serverCallback).listen(8080);