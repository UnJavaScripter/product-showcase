'use strict';

const express = require('express');
const bodyParser= require('body-parser')
const app = express();


// Our database will be an array
let DataArr = [];


// Dummy data

const products = [
  "Pendiente","Manibela","Patata","Rueda","Pala","Silla","Pantalón","Bufanda","Horno","Zapato","Cuchara","Plato", "Mojarra"
];

const attrs = [
  "Suave","Subterranea","Vieja","Azul", "Eléctrica", "Caliente","Relajante","Vintage","Light","Amarillo","Veloz","Interestelar","Biónico"
];

const brands = [
  "ACME","THISTHAT","CONTOSO","CALMEX","VANDELAY","WHARMPESS","COLTRANE","PDF","LGP","JSTATION","VINTAGETRONIX","HORTNEL"
];


const generateDummyData = _ => {
  let now = Date.now();
  let randomNumber = Math.random();

 return  {
  id: Math.ceil((randomNumber*1000) % now),
  name: products[Math.floor(Math.random() * (products.length))] + " " + attrs[Math.floor(Math.random() * (attrs.length))],
  seller: brands[Math.floor(Math.random() * (brands.length))],
  pic: `https://unsplash.it/300/300/?random&time=${randomNumber}`,
  price: Math.ceil(randomNumber * 100),
  currency: {
    name: 'USD',
    symbol: '$'
  }
 };
  
}

for(let i = 0 ; i < Math.ceil(Math.random() * 100)+20 ; i++){
 DataArr.push(generateDummyData());
}








// Auth
let isAuthenticated = (req, res, next) => {
  let allowedTokens = ['Bearer 800813555'];
  let authToken = req.headers['authorization'];

  if(!authToken){
    return res.status(403).send({ message: 'No Authorization header present' }).end();
  }

  if(allowedTokens.indexOf(authToken) == -1) {
    return res.status(401).send({ message: 'Invalid token' }).end();
  }

  next();

};


// API Responses
let respond = (res, status, data) => {
  if(!data){
    return res.status(status).end();
  }
  return res.status(status).send(data).end();
}



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods',' GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// API
app.get('/api/items', (req, res) => {
  respond(res, 200, DataArr);
});

app.get('/api/item/:id', (req, res) => {
  respond(res, 200, DataArr.filter(e => e.id == req.params.id));
});

app.post('/api/items', (req, res) => {
  DataArr.push(req.body);
  respond(res, 201);
});

app.put('/api/item/:id', (req, res) => {
 if(req.body._id) {
    delete req.body._id;
  }
 
 DataArr.map((e,i) => {
  return e.id == req.params.id ? (e = req.body, respond(res, 200, [])) : respond(res, 304, 'Couldn\'t find that' );  
 })

});

app.delete('/api/item/:id', (req, res) => {
  DataArr = DataArr.filter(e => e.id !== req.params.id);
  respond(e, 200, []);
});  



app.listen(3000, _ => console.log('API running on port 3000'));