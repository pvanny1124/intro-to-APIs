var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    //.search is what we named our "name" attribute in the form of search.ejs
   var query = req.query.search;
   //make a url variable to make the code a lot cleaner
   //"&apikey=thewdb" is the APIkey we need to do this.
   var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
   
   request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
           var data = JSON.parse(body);
            res.render("results", {data: data});
       }
   })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("MOVIE APP HAS STARTED");
});