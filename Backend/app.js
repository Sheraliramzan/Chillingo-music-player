let express = require('express');
let nunjunks = require('nunjucks');
let bodyParser = require('body-parser');
const db = require("./db/users")

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
nunjunks.configure('views', {autoescape:true, express:app});

app.get('/register', async (req,res)=>{
  //const results = await db.createUser(req.body);
  //res.status(201).json({id: results[0]});
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

app.post('/register', async (req,res) =>{
  const results = await db.createUser(req.body);
  res.status(201).json({id: results[0]});
 console.log(req.body);
 res.redirect('/index');
})


app.listen(3000);