import {encriptar} from './encriptacion';
//import {encriptar} from 'encriptacion';
const express = require('express');
const mysql=require("mysql");
const iprequest=require("request-ip");
const app=express();
//cors
const cors=require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'pillsend'
});

connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

const configuracion={
    hostname: "127.0.0.1",
    port: 4000,
}

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})

app.post("/login",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    let password=encriptar(req.body.password,"1");

    console.log("CONTRA: ",password);
    
    connection.query("select * from login where email=? and password=? ; ",[email,password],function(error:any,results:any,fields:any){
        
        if (error) throw error;

        if(results.length==0){

            res.send(JSON.stringify({"mensaje": "Email y/o Password no son correctos!!", "error": true }) );
            return;
        } else {
            res.send(JSON.stringify({"mensaje": "Logueo exitoso!!", "error": false, datos:results[0].tipo }) );
            return
        }
    });
    
});

app.post("/registro",jsonParser,(req:any, res:any) => {
    let name = req.body.name
    let email=req.body.email;
    let password=encriptar(req.body.password,"1");

    console.log("CONTRA: ",password);
    
    connection.query("INSERT INTO login(name, email, password) VALUES (?,?,?)",[name,email,password],function(error:any,results:any,fields:any){
        
        if (error) throw error;

        if(results.length==0){

            res.send(JSON.stringify({"mensaje": "Email y/o Password no son correctos!!", "error": true }) );
            return;
        } else {
            res.send(JSON.stringify({"mensaje": "Logueo exitoso!!", "error": false }) );
            return
        }
    });
    
});

app.delete("/eliminarUsuario",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    
    connection.query("DELETE FROM `login` WHERE email=?",[email],function(error:any,results:any,fields:any){
        if (error) 
        throw error;
        res.send( JSON.stringify({"mensaje":"Se ha encontrado el email","error":false} ));
        return;
    });
});