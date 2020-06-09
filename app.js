const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
    
    
    
})



https.get("https://api.kanye.rest",(res) => {
    console.log('statusCode:', res.statusCode);
    
  res.on("data", (d)=>{
      const quoteObj = JSON.parse(d);
      const quote = quoteObj.quote;
      console.log(d);});
  }).on('error', (e) => {
    console.error(e);
     const output = document.getElementById("title");
     output.innerHTML = "hello world!";
    

    res.send(quote);
    

    
  });




app.listen(3000, function () {
    console.log("Server is running on port 3000");
})