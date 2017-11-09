
var express = require('express');
var bodyParser = require('body-parser');
var path =require('path');
var funnyWords = require('funny-words');


var app = express();


var router = express.Router();


router.get('fun-word.herokuapp.com', function(req, res) {
  var answer=funnyWords("Confuse your users positively");
  var confused=funnyWords("confused");
     res.render('index',
     { answer : answer, confused : confused }
   );

});



router.post('/', function(req, res)
{
  console.log("some idiot has used your system");
  // console.log(req.body.element_1);
  var answer=funnyWords("Confuse your users positively");
  var confused=funnyWords(req.body.element_1);
     res.render('index',
     { answer : answer, confused : confused }
   );


   console.log(confused);

});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//setting sttatic path
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen('3000', function()
{
  console.log('server started on port 3000');
});
