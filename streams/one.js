#!/usr/bin/env node
const fs = require("fs");

var contents;

var rs = fs.createReadStream("./text.txt");

// rs.pipe(process.stdout)

rs.on("readable", () => {
  var str = "";
  var d = rs.read();
  if (d) {
    if (typeof d === "string") {
      str = d;
    } else if (typeof d === "object" && d instanceof Buffer) {
      str = d.toString("utf8", 0, d.size);
    }

    if (str) {
      contents = str;
    }
  }
});

rs.on("end", () => {
  console.log(contents.toString("utf8"));
});

rs.on("error", err => {
  console.log("Error reading stream: ", JSON.stringify(err));
});
