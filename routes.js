
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/'){

        const messages = fs.readFileSync('message.txt', 'utf8').split('\n');
    
        res.write('<html>');
        res.write('<head><title><Enter Message></title></head>');
        res.write('<body>');
    
        messages.forEach(message => {
            res.write(`<p>${message}</p>`);
        });
    
        
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' &&  method === 'POST'){
    
         const body = [];
         req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
         });
         req.on('end', () =>{
            const parsedBody =  Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            fs.writeFileSync('message.txt',message);
            
         });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        
    }
    res.setHeader('Content-Type', 'text/plain');
};

module.exports = requestHandler;
