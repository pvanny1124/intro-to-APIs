var request = require('request'); //includes request package

 console.log("Sunset in Hawaii is at... ");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
   //error holds any error - server is down, or no internet connection, etc
   if(!error && response.statusCode == 200){
       //body is a string (check using typeof), so we need to parse into js
       var parsedData = JSON.parse(body);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
   } 
  
});