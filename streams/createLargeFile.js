const fs = require("fs");

const file = fs.createWriteStream("./big.file");

for (let i = 0; i < 1e6; i++) {
  file.write(
    "tthis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linethis is a new linehis is a new line"
  );
}
file.end();
