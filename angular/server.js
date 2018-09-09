'use strict';
const chalk = require('chalk');
const express = require('express');
const app = express();


/*  Parser avec le querystring  URL */ 
var bodyParser = require('body-parser')
let bodyParser = require(`body-parser`);

let mongoDB = require(`mongodb`);
let url =`mongodb: //localhost:27017`;

let options = { useNewUrlParser:true };


app.use(express.static(`angular`));

/***********   catalogues  Produits  */
app.get(`/api/products`, (req, res) => {

    mongoDB.mongoClient.connect(url, options,(error,
        client) =>{
            if(error){
                console.log(error);
            }else{
                console.log(`Connexion au server Mongo 
                db effectuée`);

                let db = client.db(`boutique`);
                db.collection(`products`, (error,
                     laCollection) =>{
                         if (error){
                             console.log(`Impossible de se connecter
                              à la collection`);
                         }else  {
                             let cursor = laCollection.find({},{});
                             cursor.toArray((error,documents)=>{
                                 if(error){
                                     console.log(`impossible de récuper 
                                     la collection`);
                                 }else {
                                     console.log(chalk.yellow(`Envoi des données
                                      envoyées au format json`));

                                      response.json(documents)
                                 }
                             });
                         }
                     });

            }
        });
});

/**************************************** fiche produit ********************************* */


app.get(`/api/products/findOne`,(resquest, response)=> {
    let queryString = request.query;
    if(queryString.filter){
        let obj = JSON.parse(queryString.filter);
        let produitID = obj.where.id;
        console.log(productID);
    mongoDB.mongoClient.connect(`mongodb://localhost:27017`,
    {useNewUrlParser:true}, (error, client)=>{
        if(error){
            console.log(error);
        }else {
            console.log(`Connexion au serveur Mongo réussie`);

            let db = client.db(`boutique`);
            db.collection(`products`, (error, laCollection)=>{
                if(error){
                    laCollection.findOne({id : productID},
                    (error,result) => {
                            if (error){
                                console.log(`erreur`);

                            }else {
                                response.json(result);
                            }
                    });
                }
            });
        }
    });
    }
});









/******************************************************************************************** */
let server = app.listen(8080, () =>{
    console.log(chalk.green(`the server started ok`))

});