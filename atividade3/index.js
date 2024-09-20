const calc = require('./util/calculadora');

const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App executando na porta " + PORT);
});

app.get('/', function(req, res){
    res.send("Atividade 3 - Web Calculadora");
});


app.get('/somar/:a/:b', (req, res)=> {
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.somar(a, b);
    res.send(`${a} + ${b} = ${c}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${c}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${c}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.somar(a, b);
    res.send(`${a} / ${b} = ${c}`);
});