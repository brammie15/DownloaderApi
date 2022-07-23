const express = require('express');
const tiktok = require('tiktok-scraper-without-watermark')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
  console.log("Got request dingus");
})

app.get("/tiktok", (req,res) =>{
    var url = req.body.url;
        
    tiktok.tiktokdownload(url)
    .then(result => {
        res.send(result);
    })
    .catch(e => {
        console.log(e)
        res.sendStatus(404);
    })
   
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })