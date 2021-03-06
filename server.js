/*NOTE: This is JS for NodeJS, not actual client-side JS (see frontend dir)*/
const express = require('express'); //used to create the express app
const path = require('path');   //

const app = express();  //create an express app

/*This is just in case they include /static in the url path.*/
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

/* First argument means 'all'
 * This function means no matter what entry point I come from, it will send me to index.html
 * Important IOT keep this a single-page application*/
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

/* This means to start the process on left side or arg, or default to port 5060*/
app.listen(process.env.PORT || 5080, () => console.log("Server running..."));
