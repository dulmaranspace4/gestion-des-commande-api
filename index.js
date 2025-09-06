const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define some basic endpoints
app.get('/commandes', (req, res) => {
    res.send('List of orders');
});

app.post('/commandes', (req, res) => {
    res.send('Order added');
});

app.put('/commandes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Order ${id} updated`);
});

app.delete('/commandes/:id', (req, res) => {
    res.send('Order deleted');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});