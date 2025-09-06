const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Définir quelques points d'accès de base
app.get('/commandes', (req, res) => {
    res.send('Liste des commandes');
});

app.post('/commandes', (req, res) => {
    res.send('Commande ajoutée');
});

app.put('/commandes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Commande ${id} modifiée`);
});

app.delete('/commandes/:id', (req, res) => {
    res.send('Commande supprimée');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});