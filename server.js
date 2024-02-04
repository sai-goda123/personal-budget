const express =  require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = require('./myBudget.json');

app.get('/budget', (req, res) => {
    res.json(budget );
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})