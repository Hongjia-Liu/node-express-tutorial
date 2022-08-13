const http = require("http");
const fs = require("fs");

// get all files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
