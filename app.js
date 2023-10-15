
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!");
    next(); // Allows the request to continue to the next middleware in line.
});

app.use((req, res, next) => {
    console.log("In the another middleware!");
    res.send('<h1>Hello there,from Express!</h1>')
});


const port = 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});


