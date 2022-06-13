//GET request web server
const express = require ("express"); //pulls express package library in
const app = express(); //create web server called 'app'. 'app' is somewhere between object and class. We can add methods to this

app.use("/static", express.static("public"));//use method add things to our server. Optional 1sr argument - http path/route. must start with a forward slash. This adds a path to end of url.  'express.static' is for handling static htmll files. Looks in the 'public' folder
// added a static url path to my web server (app), when hit it will run our public folder

app.listen(5001, ()=>{
    console.log("Listening on port 5001");
});


