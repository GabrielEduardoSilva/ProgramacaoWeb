const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App executando na porta " + PORT);
});

var items = []

app.get('/', function(req, res){
    res.send("Atividade 4 - API Estoque");
});

// Adicionar
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let itemID = req.params.id;
    let itemName = req.params.nome;
    let itemQuantity = parseInt(req.params.qtd);

    // Verificar se o item já existe no estoque
    const existingItem = items.find(item => item.itemID === itemID);

    if (existingItem) {
        res.send(`Item com ID ${itemID} já existe.`);
    } else {
        let item = {
            itemID: itemID,
            itemName: itemName,
            itemQuantity: itemQuantity
        };
        items.push(item);
        res.send(`Adicionado ${item.itemQuantity} unidade(s) de ${item.itemName}. ID: ${item.itemID}`);
    }
});

// Listar
app.get('/listar', (req, res) => {
    res.json(items);
});

app.get('/remover/:id', (req, res)=> {
    let itemID = req.params.id;

    const initialLength = items.length;
    items = items.filter(item => item.itemID !== itemID);

    if (items.length < initialLength) {
        res.send(`Item com ID ${itemID} removido.`);
    } else {
        res.send(`Item com ID ${itemID} não encontrado.`);
    }
});

// Editar
app.get('/editar/:id/:qtd', (req, res) => {
    let itemID = req.params.id;
    let newQuantity = parseInt(req.params.qtd);

    const item = items.find(item => item.itemID === itemID);

    if (item) {
        item.itemQuantity = newQuantity;
        res.send(`Quantidade do item com ID ${itemID} atualizada para ${newQuantity}.`);
    } else {
        res.send(`Item com ID ${itemID} não encontrado.`);
    }
});
