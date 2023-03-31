const express = require("express");
const app = express();




// estou dizendo pra o express usar o EJS como View Engina
app.set('view engine','ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("index");
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
});



app.post("/salvarpergunta", (req,res)=>{
    res.send("Formulario Enviado!");
});












app.listen(8080, () => {console.log("app Rodando!");});