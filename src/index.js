const app = require ('./server');
const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`Servidor rodando na porta 3000 ${3000}`)
})