// const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) =>{
//     console.log('In the Middleware');
//     next(); // Allows the request to continue to the next middwares
// });

// app.use((req, res, next) =>{
//     console.log('In Another Level');
//     // ...
// });


app.use('/users',(req, res, next) =>{
    console.log('/users Middleware');
    res.send('<p>The Middleware thet handles just /users</p>')
    // next(); // Allows the request to continue to the next middwares
});

app.use('/',(req, res, next) =>{
    console.log('/Middleware');
    res.send('<p>The Middleware thet handles just</p>')
    // next(); // Allows the request to continue to the next middwares
});

// const server = http.createServer(app);

app.listen(3000)