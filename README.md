Início Rápido com React Native e Expo

1. Download e Instalação:
   - Node.js: https://nodejs.org/en/download
   - Expo CLI: https://docs.expo.dev/get-started/installation/ (instale localmente no projeto)

2. Dependências:
   npm install @expo-google-fonts/poppins@^0.2.3
   npm install @expo/vector-icons@^13.0.0
   npm install @react-native-picker/picker@2.4.10
   npm install @react-navigation/native@^6.1.7
   npm install @react-navigation/native-stack@^6.9.13
   npm install @react-navigation/stack@^6.3.17
   npm install expo-font@~11.4.0

3. Iniciando o Projeto:
   - Abra o terminal no VSCode
   - Execute: npm start

4. Atualização do Expo:
   - Assista ao vídeo: https://www.youtube.com/watch?v=bTIVF1fU-KU&td=149s em caso de problemas durante a atualização.

Comandos para Solucionar Problemas:
1. npm audit fix --force
2. npx expo install --fix

Como Mandar o repositorio para o remoto:
1. git init
2. git remote add origin https://github.com/HyP3rZer4/FitConnectApp.git
3. git add *
4. git commit -m "Sua mensagem de commit aqui"
5. Crie uma Nova Branch: git branch nome_da_sua_branch
6. Mude para a Nova Branch: git checkout nome_da_sua_branch

7. git push origin nome_da_sua_branch

# Configuração do Projeto

## Expo CLI
Para instalar o Expo CLI globalmente, execute o seguinte comando:

npm install -g expo-cli

#MySQL Workbench
Crie um banco de dados chamado "db_usuario" no MySQL Workbench.
CREATE DATABASE db_usuario;

Para deletar os dados de uma tabela, utilize o comando:
TRUNCATE TABLE usuario;

#Sequelize ORM
Instale o Sequelize ORM no seu projeto com os seguintes comandos:
npm install --save sequelize
npm install --save-dev sequelize-cli

npx sequelize-cli init
Isso criará as seguintes pastas:
config: Contém o arquivo de configuração para se conectar ao banco de dados.
models: Contém os modelos do seu projeto.
migrations: Contém arquivos de migração.
seeders: Contém arquivos iniciais.

Mudar o arquivo config/config.json e altere a senha para "sua_senha" e o nome do banco de dados para "db_usuario".

#Criar um Modelo no Sequelize
Crie um modelo no Sequelize com o seguinte comando (o nome do model deve estar em maiúsculas):
npx sequelize-cli model:generate --name Usuario --attributes email:string,senha:string

#Executar Migrações
Para criar as tabelas no banco de dados, execute o seguinte comando:
npx sequelize-cli db:migrate

Se ocorrer um erro "ERROR: Please install mysql2 package manually", instale o pacote mysql2 manualmente com o comando:
npm install mysql2

#Configurar o Controlador
Crie um arquivo chamado controller.js para se relacionar com o banco de dados.

#Instalar Dependências para o Backend
npm install express --save
npm install body-parser
npm install cors
npm install -g nodemon

#Iniciar o Backend
nodemon controller.js

#Configurar o Frontend
Altere o http no arquivo cadastro de acordo com o IP do seu PC com a porta 3000
