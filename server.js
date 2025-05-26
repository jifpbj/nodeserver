import http from "http";
import fs from "node:fs";
const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("request has been made: " + url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.ReadStream("./index.html").pipe(res);
  }
  if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.ReadStream("./about.html").pipe(res);
  }
  if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.ReadStream("./contact.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.ReadStream("./404.html").pipe(res);
  }
});

server.listen(port);
console.log("listening on port " + port);
