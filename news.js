var request = require("request");

request.get({
        url: 'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=260a104073514732a2bb3f443831a7b4',
      }, function(err, response, body) {
        body = JSON.parse(body);
        var i = Math.floor((Math.random() * 8) + 1);

            title = body.articles[i].title;
            description = body.articles[i].description;
            console.log(title);
            console.log(description);

      }
    )
