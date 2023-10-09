const http = require('http');


const server = http.createServer((req, res) => {
   
    console.log('Aniket');

    res.setHeader('Content-Type', 'text/plain');
   
    
});


server.listen(4000);
