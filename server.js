const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3003;

app.use(express.json());

app.listen(port, () => {console.log(`Server rodando na porta: ${port}`)})

app.post('/cripto', async function cripto(req, res){
 try {
    const { senha } = req.body;
    senhacrypt = await bcrypt.hash(senha, 10);

    console.log(`Sucesso! SENHA: ${senha}\nSucesso! HASH: ${senhacrypt}`);
    return res.send(`Sucesso! SENHA: ${senha}\nSucesso! HASH: ${senhacrypt}`);

} catch (error) {
    console.log(`Erro ao criptografar: ${error}`);
    return res.status(404).json("Ocorreu ao criptografar senha.");

}})

app.post('/decripto', async function decripto(req, res){
    try {
       const { senha, cryptsenha } = req.body;
       const response = await bcrypt.compare(senha, cryptsenha);

       console.log(`Sucesso! SENHA is ${response}`);
       return res.send(`Sucesso! SENHA is ${response}`);
   
   } catch (error) {
       console.log(`Erro ao descriptografar: ${error}`);
       return res.status(404).json("Ocorreu ao descriptografar");
   
   }})