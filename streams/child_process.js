const { spawn } = require("child_process");
// const child = spawn("ls");
const child = spawn("find", [".", "-type", "f"]);

child.stdout.on("data", data => console.log("Data: ", data.toString()));
child.stderr.on("data", data => console.log("Error: ", data.toString()));

child.on("exit", (code, signal) =>
  console.log(`exit code: ${code} ; signal: ${signal}`)
);

child.on("close", () => console.log(`stream closed`));
