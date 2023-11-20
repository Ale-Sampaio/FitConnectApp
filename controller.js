const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

//teste
const model = require('./models');

app.use(express.json());

app.use(session({
  secret: 'seuSegredo',
  resave: false,
  saveUninitialized: true,
}));


//Rotas
// Rota para login
app.post('/login', async (req, res) => {
  try {
    const user = await model.Usuario.findOne({
      where: { email: req.body.email, senha: req.body.senha }
    });

    if (user) {
      console.log(`Login realizado: ${user.email}`);

      // Salve o ID 
      req.session.userId = user.id;
      req.session.save();

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
    const { email, senha } = req.body;
    console.log(`Email: ${email}, Senha: ${senha}`);
    res.json('Dados recebidos com sucesso!');
  } catch (error) {
    console.error('Erro durante o cadastro:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

// Rota para cadstro do IMC
app.post('/ConfiguracaoPerfil', async (req, res) => {
  try {
    // Verifica se o usuário está autenticado (tem um ID na sessão)
    if (!req.session.userId) {
      return res.status(401).json({ success: false, message: 'Usuário não autenticado' });
    }

    const userId = req.session.userId;

    // Atualiza os dados do perfil para o usuário logado
    await model.Usuario.update(
      {
        'nome': req.body.nome,
        'idade': req.body.idade,
        'altura': req.body.altura,
        'peso': req.body.peso,
        'genero': req.body.genero,
      },
      {
        where: { id: userId },
      }
    );

    // Apenas verificando se está passando os dados do front-end para o back-end
    const { nome, idade, altura, peso, genero } = req.body;
    console.log(`Nome: ${nome}, Idade: ${idade}, Altura: ${altura}, Peso: ${peso}, Genero: ${genero}`);

    res.json({ success: true, message: 'Dados recebidos com sucesso!' });
  } catch (error) {
    console.error('Erro durante o cadastro:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está Rodando na porta ${port}`);
});