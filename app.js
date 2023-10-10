const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    res.setHeader('Content-Type', 'text/plain');

    if (url === '/home') {
        res.end('Welcome home');
    } else if (url === '/about') {
        res.end('Welcome to About Us page');
    } else if (url === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
    
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

