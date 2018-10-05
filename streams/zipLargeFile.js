const fs = require("fs");
const zlib = require("zlib");

const fileName = process.argv[2];

/*
fs.readFile(fileName, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(`${fileName}.zip`, buffer, err => {
      if (err) throw Error;
      console.log("File compressed");
    });
  });
});
*/

fs.createReadStream(fileName)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(`${fileName}.gzip`))
  .on("finish", () => console.log("File Compressed"));
