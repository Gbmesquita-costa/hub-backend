## Aplicação Node.js

Esta é uma aplicação backend construída com Node.js e Prisma. Ela consiste em 3 tabelas: usuários, empresas e locais. Os usuários têm um relacionamento um-para-muitos com empresas, enquanto empresas têm um relacionamento muitos-para-um com usuários e um relacionamento um-para-muitos com locais. A tabela locais tem um relacionamento muitos-para-um com empresas.

A aplicação possui um sistema de autenticação usando JWT. Todas as rotas dos controllers são validadas com JWT e o token é retornado ao usuário após o login para ser armazenado e usado em futuras requisições.

## Tecnologias utilizadas

. Node.js
. Bcrypt
. Cors
. Dotenv
. Express
. Jsonwebtoken
. Tsyringe
. TypeScript
. Prisma

## Configuração do ambiente

Para executar esta aplicação em seu computador, siga estas etapas:

1. Clone este repositório
2. Execute o comando npm install para instalar as dependências
3. Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis de ambiente:

. `DATABASE_URL: a URL do banco de dados PostgreSQL`
. `JWT: uma chave secreta usada para assinar e verificar tokens JWT`

Execute o comando npm run dev ou yarn dev para iniciar o servidor de desenvolvimento

Obs: Observe que há um arquivo .env.example que mostra o formato do arquivo .env.

## Funcionalidades

. Cadastro de usuário: permite cadastrar um novo usuário no banco de dados PostgreSQL utilizando o ORM Prisma. A senha é criptografada utilizando a biblioteca Bcrypt para garantir a segurança das informações.

. Login de usuário: autentica o usuário utilizando JWT e expira automaticamente após um determinado tempo, garantindo a segurança das informações.

. Cadastro de empresas: permite cadastrar empresas no banco de dados e relacionar com o usuário responsável pelo gerenciamento.

. Cadastro de locais das empresas: permite cadastrar os locais das empresas e relacionar com a empresa do usuário logado.

## Conclusão

Esta é uma aplicação backend construída com Node.js, Prisma e entre outras tecnologias. Esperamos que este README tenha sido útil para entender a estrutura e funcionamento da aplicação. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato! 😊