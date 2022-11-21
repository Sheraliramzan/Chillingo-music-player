let express = require('express');
let nunjunks = require('nunjucks');
let bodyParser = require('body-parser');

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
nunjunks.configure('views', {autoescape:true, express:app});

app.get('/register', (req,res)=>{
  res.render('register.html');
})
app.get('/login', (req,res)=>{
  res.render('login.html');
})
app.get('/index', (req,res)=>{
  res.render('index.html');
})
app.get('/about', (req,res)=>{
  res.render('about.html');
})

app.post('/register',(req,res) =>{
 console.log(req.body);
 res.redirect('/index');
})


app.listen(3000);