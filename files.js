const fs = require("fs");

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data.toString());
// });

// fs.writeFile("./docs/blog1.txt", "hello polk", () => {
//   console.log("write");
// });

// fs.writeFile("./docs/blog2.txt", "hello again", () => {
//   console.log("write");
// });

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("new folder");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("delete folder");
//   });
// }

if (fs.existsSync("./assets/test.txt")) {
  fs.unlink("./assets/test.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("dekete");
  });
}
