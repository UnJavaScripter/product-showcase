'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 9000;

server.listen(port, function () {
    console.log('Server ready to go at port %d', port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

    var self = this;


/**************************************************************************************************/

self.products = [
  "Pendiente","Manibela","Patata","Rueda","Pala","Silla","Pantalón","Bufanda","Horno","Zapato","Cuchara","Plato"
];

self.attrs = [
  "Suave","Subterranea","Vieja","Azul","Caliente","Relajante","Vintage","Light","Amarillo","Veloz","Interestelar","Biónico"
];

self.brands = [
  "ACME","THISTHAT","CONTOSO","CALMEX","VANDELAY","WHARMPESS","COLTRANE","PDF","LGP","JSTATION","VINTAGETRONIX","HORTNEL"
];


self.anImage = {
  "data": [
    {
        "type": "Image",
        "id": 2,
        "title": "Lorem",
        "author": "Nobody",
        "created_at": "2012­12­12T21: 08: 20Z",
        "main_attachment": {
            "big": "http: //assets.somesite.com/uploads/7/attachment/2/mosaic_medium_tumblr_me3wktQrwN1rwfvb6o1_500.jpg",
            "small": "http: //assets.somesite.com/uploads/7/attachment/2/mosaic_small_tumblr_me3wktQrwN1rwfvb6o1_500.jpg"
        },
        "likes_count": 5,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://assets.somesite.com/uploads/3717/thumb_avatar_Avatar.png",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://*********.com/images/2­train­in­india­agra/like",
                "methods": "POST"
            }
        ]
    }
  ],
  "pagination": {
      "next": "https://*********.com/images.json?&page=2",
      "previous": null
  }
}


self.aProduct = {
  "data": [
    {
      "type": "Product",
      "id": 706,
      "title": "A thing",
      "author": "Somebody",
      "selling_price": "262.0",
      "currency": "COP",
      "created_at": "2013­09­17T09:46:55Z",
      "main_attachment": {
        "big": "http://assets.somesite.com/uploads/15089/attachment/174502/mosaic_medium_LR_Aqua_and_pearl_earring.jpg",
        "small": "http://assets.somesite.com/uploads/15089/attachment/174502/mosaic_small_LR_Aqua_and_pearl_earring.jpg"
      },
      "likes_count": 2,
      "liked": false,
      "links": [
        {
          "rel": "avatar",
          "uri": "http://assets.somesite.com/uploads/15089/thumb_avatar_avatar_Athens_Sourcing_21.png",
          "methods": "GET"
        },
        {
          "rel": "like",
          "uri": "http://*********.com/products/706­crete­earrings/like",
          "methods": "POST"
        }
      ]
    }
  ],
  "pagination": {
      "next": "https://*********.com/images.json?&page=2",
      "previous": null
  }
}



self.setDummyData = function(type){
  var now = Date.now();
  var randomNumber = Math.random();
  var newProduct;

  if(type === "product"){
    newProduct = JSON.parse(JSON.stringify(self.aProduct)).data[0];
    newProduct.selling_price = Math.ceil(randomNumber * 100);
  }else{
    newProduct = JSON.parse(JSON.stringify(self.anImage)).data[0];
  }

  newProduct.id = Math.ceil(randomNumber*1000);
  newProduct.title = "A thing " + Math.floor(randomNumber*1000);
  newProduct.created_at = now;
  newProduct.likes_count = Math.floor(randomNumber * 10);
  newProduct.liked = newProduct.likes_count ? newProduct.likes_count % 2 === 0 : false;
  newProduct.main_attachment.big = "https://unsplash.it/300/300/?random&time=" + randomNumber
  newProduct.main_attachment.small = "https://unsplash.it/150/150/?random&time=" + randomNumber
  newProduct.author = self.brands[Math.floor(Math.random() * (self.brands.length))];
  newProduct.title = self.products[Math.floor(Math.random() * (self.products.length))] + " " + self.attrs[Math.floor(Math.random() * (self.attrs.length))];
  return newProduct;
}



self.getData = function(howMany){
  var response = [];

  for(var i = 0 ; i < howMany ; i++){
    if(Math.ceil(Math.random()*10) % 3 === 0){
      response.push(self.setDummyData("product"));
    }else{
      response.push(self.setDummyData("image"));
    }
  }
  return  {"data": response, "pagination": { "next": "https://*********.com/images.json?&page=2", "previous": null }};
}




app.get('/api/things', function(req, res) {
    res.send(self.getData(20))
});

app.get('/api/moreThings', function(req, res) {
    res.send(self.getData(10))
});








