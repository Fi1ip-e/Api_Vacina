const express = require('express');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.use('/pessoas', controllers.pessoas);

app.listen(8080, () => {console.log("aplicação rodando na porta 8080")});