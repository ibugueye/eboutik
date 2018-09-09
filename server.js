'use strict';

const express = require('express');
const app = express();

// querrystring 
let bodyParser = require('body-parser');

let  MongoDB = require('mongodb');
let url = `mongodb://localhost:27017`;
let options = { userNewUrlParser : true};


app.use(express.static(`angular`));


// catalogues des produits 

app.get(`/api/products`,(req,res)=>{
    

    MongoDB.MongoClient.connect(url, options, (error, 
        client) =>{
            if(error){
                console.log(error);
            }else {
                


                console.log(` serveur Mongo connecté Ok!`);
                // x à la base suma db
                let db = client.db(`boutique`);
                db.collection(`products`,(error,sumaCollection) => {
                    if(error){
                        console.log(`suma Collection diotomako unreable`);
                    }else{
                        let cursor = sumaCollection.find({},{});
                        cursor.toArray((error,documents) =>{
                            if(error){
                                console(`la collection est
                                 irrécupérable`);
                            }else {
                                console.log(`les données envoyées au format json `);
                                res.json(documents);

                            }
                        });
                    }
                });

            }
        });
    })
        
    app.use (function(req, res) {

        if (req.methode =="GET" && req.url == "/admin")
        res.end("<h1> Bienvenue dans ma partie administation du site </h1>");
    });
   
// app.post
//app.delete
//app.put

//

        let server = app.listen(8080,()=>{
            console.log(`the server started on port 8080`)
        });