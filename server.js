var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   `article-one`: {
  
 title: 'Article one | Akshatha Tallur',
 heading: 'Article one',
 date: '13 August 2017',
 content: `
          <p> 
            THis is the content for my first article.
            </p> `
 
 },
   `article-two`: {
    
 title: 'Article two | Akshatha Tallur',
 heading: 'Article Two',
 date: '13 August 2017',
 content: `
          <p> 
            THis is the content for my second article.
            </p> `
 

  },
  `article-three`: {
    
 title: 'Article Three | Akshatha Tallur',
 heading: 'Article Three',
 date: '13 August 2017',
 content: `
          <p> 
            THis is the content for my third article.
            </p> `
 

  }


};


function createTemplate(data){
    var title = data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name="viewpoint" content="width-device-width,intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
         </head>
        
       
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3> ${heading} </h3>
            <div> ${date}</div>
            <div>
                <p> 
                ${content}
                </p>
            </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}  

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){
    var articleName= req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
