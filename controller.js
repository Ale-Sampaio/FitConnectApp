const express = require('express');
const app = express();
const port = 3000;

//teste
const model = require('./models');

app.use(express.json());


//Rotas
app.post('/cadastro', async (req, res) => {
  let reqs = await model.Usuario.create({
    'email': req.body.email,
    'senha': req.body.senha,
    'createdAT': new Date(),
    'updatedAT': new Date(),
  });

// Apenas verificando se esta passando os dados do front-end para o back-end
  const { email, senha} = req.body;
  console.log(`Email: ${email}, Senha: ${senha}`);
  res.json('Dados recebidos com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor está Rodando na porta ${port}`);
});