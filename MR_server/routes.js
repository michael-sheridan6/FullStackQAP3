
const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    switch (req.url) {
        case "/home":
            fs.readFile(__dirname + "/files/home.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(err);
                    return;
                })
            console.log("You are here: Homepage");
            break
            
        case "/contact":
            fs.readFile(__dirname + "/files/contact.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(err);
                    return;
                })
            console.log("You are here: Contact Page");
            break

        case "/products":
            fs.readFile(__dirname + "/files/products.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(err);
                    return;
                })
            console.log("You are here: Products Page");
            break

        case "/subscribe":
            fs.readFile(__dirname + "/files/subscribe.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(err);
                    return;
                })
            console.log("You are here: Subscribe Page");
            break

        case "/about":
            fs.readFile(__dirname + "/files/about.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(err);
                    return;
                })
            console.log("You are here: About Page");
            break
        
        default:
            fs.readFile(__dirname + "/files/error.html")
                .then(content => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(404);
                    res.end(content);
                })
            
            console.log("You are here: Error Page");
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});