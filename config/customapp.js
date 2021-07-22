const express = require('express');
const consign = require('consign')
const  bodyParser = require('body-parser')
const ejs = require('ejs');

  const app = express();
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.set('view engine', 'ejs');




    module.exports  = () =>{
      
         consign()
        .include('controllers')
        .into(app)
        return app;
        
    }