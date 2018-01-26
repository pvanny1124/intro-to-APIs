Introduction to API's

To use an API, we need:
1) an APIkey (sometimes)
2) the "request" package
3) A url to make the API call

structure of request():

    request(<url>, function(error, response, body){
        //error holds any error - server is down, or no internet connection, etc
        
        if(!error && response.statusCode == 200){
            //body is a string (check using typeof), so we need to parse into js
            var parsedData = JSON.parse(body);
            console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
        } 
    });
    
to parse body data into JSON:

        JSON.parse(body);
        
req.query comes from a get request. In our movie app, the form in search.ejs is a GET request and in our app.get("/results") route, we are able to use req.quesry.search to get the users query string!

/* more notes in code */