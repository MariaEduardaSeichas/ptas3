const express = require('express');
const jwt = require('jsonwebtoken');
const {expressjwt:expressJWT} = require('express-jwt');
const cors = require('cors');
const cookieParse = require('cookie-parse');
//const { usuario } = require('./models');

const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(cors());
app.use(cookieParse());

app.get('/', async function(req, res){
    var resultado = "teste"
    res.json(resultado);
  //var resultado = await usuario.findAll();
  //res.json(resultado);
});

app.get('/autenticar', async function (req, res){
    res.render("autenticar")
});

app.get('/inscrever', async function (req, res){
  res.render("inscrever")
});

app.post('/logar', async function (req, res){
  var usuario = req.body.usuario;
  var senha = req.body.senha;

  if (usuario == "maria" && senha == 123){
    res.send("Autenticado ")
  } else {
    res.send("Não autenticado")
  }
});

app.post('/deslogar', async function (req, res){
    
});
app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});