const http = require('http');
const fs = require('fs');

// const server = http.createServer((req,res)=> {
//     console.log("request made");
//     // request (req) you can see on the server 
//     console.log(req.method, req.url);

//     // res is the response that you send to the Frontend.

//     // res.setHeader('Content-Type', 'text/plain');    
//     res.setHeader('Content-Type', 'text/html'); 
    
//     res.write('<b>Hello WOrld</b>');
//     // if you won't do this then the server will consider there is more request will come.
//     res.end();


// })

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');

    // routing

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;   

        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;

        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path+= '/404.html';
            res.statusCode = 404;
    }

    fs.readFile(path, (err,data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        // res.write(data);
        res.end(data);
    })
})

server.listen(3000, 'localhost', ()=> {
    console.log("Listening to port 3000");
})