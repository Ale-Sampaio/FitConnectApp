const express = require('express');
const app = express();
const port = 3000;

//teste
const model = require('./models');

app.use(express.json());


//Rotas
// Rota para login
app.post('/login', async (req, res) => {
  try {
    const user = await model.Usuario.findOne({
      where: { email: req.body.email, senha: req.body.senha }
    });

    if (user) {
      console.log(`Login realizado: ${user.email}`);
      res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
      console.log('Credenciais inválidas');
      res.json({ success: false, message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro durante o login:', error.message);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

// Rota para cadastro
app.post('/cadastro', async (req, res) => {
  try {
    await model.Usuario.create({
      'email': req.body.email,
      'senha': req.body.senha,
      'createdAT': new Date(),
      'updatedAT': new Date(),
    });

    // Apenas verificando se está passando os dados do front-end para o back-end
    const { email, senha} = req.body;
    console.log(`Email: ${email}, Senha: ${senha}`);
    res.json('Dados recebidos com sucesso!');
  } catch (error) {
    console.error('Erro durante o cadastro:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está Rodando na porta ${port}`);
});