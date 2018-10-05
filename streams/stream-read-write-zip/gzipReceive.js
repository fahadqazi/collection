const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log("filename: ", filename);
  console.log("File request received: ", +filename);

  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on("finish", () => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("That is it\n");
      console.log("File saved");
    });
});

server.listen(8000, () => console.log("listenting on 8000"));
