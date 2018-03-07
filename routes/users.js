var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
/* GET users listing. */
router.get('/AjouterClient', function(req, res, next) {
    //http://localhost:3000/users/AjouterClient?NomClient=Riadh&PrenomClient=Moussa&AdresseClient=Mahdia&NumTelPortableClient=53665213&Email=talkislam@mail.com&MotDePasse=12345&ImagePathClient=home/image.png
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
      host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    //var myQuery="insert into Client(NomClient,PrenomClient,AdresseClient,NumTelPortableClient,Email,MotDePasse,ImagePathClient)values('"+querydata.NomClient+"','"+querydata.PrenomClient+"','"+querydata.AdresseClient+"','"+querydata.NumTelPortableClient+"','"+querydata.Email+"','"+querydata.MotDePasse+"','"+querydata.ImagePathClient+"')";
    var myQuery = "INSERT INTO client (NomClient,PrenomClient,AdresseClient,NumTelPortableClient,Email,MotDePasse,ImagePathClient) VALUES ('"+querydata.NomClient+"','"+querydata.PrenomClient+"','"+querydata.AdresseClient+"',"+querydata.NumTelPortableClient+",'"+querydata.Email+"','"+querydata.MotDePasse+"','"+querydata.ImagePathClient+"')";
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
           res.status(200).json({
               msg:'Client Not Add'
           });
        }else{
            res.status(200).json({
                msg:'Client Add'
            });
        }
    });
});
UserLogin=[]
router.get('/ConnexioClient', function(req, res, next) {
    //http://localhost:3000/users/ConnexioClient?Email=talkislam@mail.com&MotDePasse=12345
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "SELECT * FROM client where Email='"+querydata.Email+"' and MotDePasse='"+querydata.MotDePasse+"'"
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.send('error');
        }else{
            if(rows.length>0){
                res.status(200).json({
                    msg:'pass login',
                    info:rows
                });
            }else{
                res.status(200).json({
                    msg:'canoot login'
                });
            }

        }
    });
});

router.get('/AfficherListeMedecin', function(req, res, next) {
    //http://localhost:3000/users/ConnexioClient?Email=talkislam@mail.com&MotDePasse=12345
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "SELECT * FROM medecin ";
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.send('error');
        }else{
            if(rows.length>0){
                res.status(200).json({
                    msg:"has medecin",
                    info:rows
                });
            }else{
                res.status(200).json({
                    msg:"no medecin"
                });
            }
        }
    });
});

router.get('/AfficherMedecin', function(req, res, next) {
    //http://localhost:3000/users/ConnexioClient?Email=talkislam@mail.com&MotDePasse=12345
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "SELECT * FROM medecin where idMedecin="+querydata.idMedecin+"";
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.send('error');
        }else{
            res.status(200).json({
                info:rows
            });
        }
    });
});
router.get('/AjouterRDV', function(req, res, next) {
    //http://localhost:3000/users/AjouterRDV?idClient=1&idMedecin=1&Statut=En Cours&DatePropose=2018-03-6&DureeDemande=08:00
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "INSERT INTO DemandeRDV (idClient,idMedecin,Statut,DatePropose,DureeDemande) VALUES ("+querydata.idClient+","+querydata.idMedecin+",'"+querydata.Statut+"',STR_TO_DATE('"+querydata.DatePropose+"','%Y-%m-%d'),'"+querydata.DureeDemande+"')";
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.status(200).json({
                msg:'RDV Not Add'
            });
        }else{
            res.status(200).json({
                msg:'RDV Add'
            });
        }
    });
});
router.get('/AfficherPropreRDV', function(req, res, next) {
    //http://localhost:3000/users/AfficherPropreRDV?idClient=1
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "SELECT * FROM DemandeRDV,medecin where medecin.idMedecin=DemandeRDV.idMedecin and  DemandeRDV.idClient="+querydata.idClient;
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.send('error');
        }else{
            if(rows.length>0){
                res.status(200).json({
                    msg:"has rdv",
                    info:rows
                });
            }else{
                res.status(200).json({
                    msg:"no rdv"
                });
            }
        }
    });
});
router.get('/NotificatioRDV', function(req, res, next) {
    //http://localhost:3000/users/NotificatioRDV?idClient=1&lastid=1
    //res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    //res.header("Access-Control-Allow-Credentials", true);
    //next();
    var querydata = url.parse(req.url,true).query;
    var config ={
        host:'127.0.0.1',
        user:'root',
        password:'12345',
        database:'mondoctor'
    }
    var connection = mysql.createConnection(config);
    connection.connect();
    var myQuery = "SELECT * FROM DemandeRDV,medecin where DemandeRDV.idDemandeRDV >"+querydata.lastid+" and medecin.idMedecin=DemandeRDV.idMedecin and  DemandeRDV.idClient="+querydata.idClient;
    connection.query(myQuery,function (err,rows,fields) {
        if(err){
            res.send('error');
        }else{
            if(rows.length>0){
                res.status(200).json({
                    msg:"has rdv",
                    info:rows
                });
            }else{
                res.status(200).json({
                    msg:"no rdv"
                });
            }
        }
    });
});

module.exports = router;
