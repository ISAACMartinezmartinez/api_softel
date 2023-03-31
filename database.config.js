//exportamos bibliotecas nesecarias 
const { response } = require('express');
const mysql = require('mysql');

//configuracion de mysql para conectar 
const conexion = mysql.createConnection({
    user: 'root',
    password: 'isaac080600',
    database: 'dbsoftel',
    host: 'localhost'
})

//Conectamos a mysql
conexion.connect(function (err, conn){
    if (err) throw err;
    console.log('Corriendo configuracion');
});

//Operaciones la base de datos

//INSERT para la tabla mina
function inserttemperatura(con, estado, callback){
    con.query(`INSERT tabla_termometro(estado_termometro, fecha) VALUES ('${estado}', NOW())`, (err, response) =>{
        if (err) throw err;
        callback(response);
    })
}

function insertpuerta(con,puerta, callback){
    con.query(`INSERT tabla_puerta(estado_puerta, fecha) VALUES ('${puerta}', NOW())`,(err,response) =>{
        if (err) throw err;
        callback(response);
    })
}

function viewtermoemtro(con, callback){
    con.query('SELECT * FROM tabla_termometro', (err,response)=>{
        if(err) throw err;
        callback(response);
    })
}

function viewpuerta(con, callback){
    con.query('SELECT * FROM tabla_puerta', (err,response) =>{
        if(err) throw err;
        callback(response);
    })
}

module.exports = {inserttemperatura,insertpuerta,viewtermoemtro,viewpuerta,conexion}