//Exportamos las bibliotecas para el servidor
const express = require('express');
const cors = require('cors');

const {conexion, inserttemperatura, insertpuerta, viewtermoemtro, viewpuerta,} = require('./database.config');
const { response } = require('express');
const app = express();

app.use(express.json())
app.use(cors());

//Configuracion del puerto donde va escuchar y de la url
app.listen(5000, () => console.log('http://localhost:5000'));

app.post('/insertestadote', (req, res) =>{
    const datos = req.body
    console.log(datos)
    inserttemperatura(conexion, datos.estado, (response) => res.json(response));
})

app.post('/insertpuerta', (req,res) =>{
    const datos = req.body
    console.log(datos)
    insertpuerta(conexion,datos.puerta, (response) => res.json(response));
})

app.get('/viewtermometro', (req,res)=>{
    viewtermoemtro(conexion, (response) => res.json(response));
})
app.get('/viewpuerta', (req,res) =>{
    viewpuerta(conexion,(response) => res.json(response));
})