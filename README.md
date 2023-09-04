# Melhor-Região

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white) ![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![MYSQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Objetivo

O nosso projeto parta da iniciativa de estudo em grupo e tem a finalidade de colocar em prática nosso estudo e aprendizado a fim de entregar um projeto completo e gerar portifólio.

## Descrição

A ideia do projeto é fazer um site para saber qual a região mais votada pelo publico, seguindo os critérios de comida, clima, cultura e pontos turísticos. 

Assim, para a tela inicial, o home terá imagens das regiões de fundo, cards das regiões mostrando imagens de alguns pontos turísticos, titulo, descrição da finalidade do projeto e um menu, com as páginas de sobre, regiões(dropdown), vote aqui(terá o formulário) e acompanhar votação.

A página  de formulário terá um formulário com os campos de nome, email, idade e sua região, ele deverá ser preeenchido toda vez que alguém apertar o botão de votar seja na tela da região escolhida ou na própria tela do formulário. O formulário deverá validar todos os campos. O email, sua região e nome deverão ser obrigatórios. Assim que os dados pessoais forem preenchidos , haverão checkboxs mostrando os criterios de clima, pontos turísticos, cultura e comida, o usuário deve escolher pelo menos um para enviar o formulário. Após o voto ser realizado um email de verificação chegará no email cadastrado notificando o voto.

A página de sobre terá informações sobre o projeto , explicando o sentido por trás, as ideias, os participantes e  informações de contato.

A página de votação exibirá as informações de qual região está sendo mais votada e quantos votos tem e também um sessão de feedback :)

## :hammer: Como projeto está composto

- `Tela Principal`:
  - Uma página inicial que explica o propósito do projeto, sua missão e visão.
  - Apresentação das regiões em destaque com imagens e informações breves.

- `Formulário de Votação`:

  - Uma seção onde os visitantes podem votar na melhor região.
  - O formulário deve incluir campos como nome, idade, email e a escolha da região favorita.
  - Certifique-se de implementar uma verificação para evitar votos duplicados com base no endereço de e-mail.

- `API Própria`:

  - Desenvolvimento de uma API para gerenciar as votações e armazenar os dados do formulário.
  - A API deve permitir o registro de votos, consultar os resultados da votação e realizar ações de gerenciamento dos dados.

- `Sobre o Projeto e Participantes`:

  - Uma página dedicada que descreve detalhadamente o projeto, sua equipe e seus objetivos.
  - Informações sobre os membros da equipe, suas contribuições e contatos.
    
- `Páginas Individuais de Região`:

  - Páginas separadas para cada região em destaque.
  - Cada página deve incluir informações detalhadas, como comidas típicas, clima, capital, imagens de pontos turísticos e costumes culturais.
  - Essas informações podem ser obtidas de um banco de dados para facilitar a manutenção e atualização.

## 🛠️ Abrir e rodar o projeto

### Clone o Repositório: 

  Abra o terminal ou prompt de comando e navegue até o diretório onde deseja armazenar o projeto. Em seguida, clone o repositório usando o comando git clone seguido da URL do repositório no GitHub, GitLab, ou outro serviço de hospedagem de código.
  
  Por exemplo:
    
  `git clone https://github.com/RaulFerreiraSilva/MelhorRegiao.git`
    
  Navegue até o Diretório do Projeto: Use o comando cd para navegar até o diretório do projeto que você acabou de clonar:
  
  `cd MelhorRegiao`
  
  <hr>
  
  ### Instale as Dependências: 
  
  Use o comando npm install ou yarn install para instalar as dependências do projeto. O package.json do projeto deve listar todas as dependências necessárias.
    
  `npm install`
  
  <hr>
  
  ### Inicie o Servidor de Desenvolvimento:
       
  `npm start`

  Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o aplicativo em seu navegador padrão. O aplicativo será recarregado automaticamente sempre que você fizer alterações no código-fonte.
    
  `Acesse o Aplicativo`

  Abra seu navegador e acesse http://localhost:3000 (ou outra porta, dependendo da configuração do projeto) para ver o aplicativo em execução.

## Autores

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/105468535?v=4" width=115><br><sub>Leonardo da Silva Fortunato</sub>](https://github.com/LeonardoFortunato13) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/105462948?v=4" width=115><br><sub>Raphael Santos Lopes Da Silva</sub>](https://github.com/RaphaelSilvaL) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/105366476?v=4" width=115><br><sub>Raul Ferreira Silva</sub>](https://github.com/RaulFerreiraSilva) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/68936164?v=4" width=115><br><sub>√ictor</sub>](https://github.com/sapocowboy) |
| :---: | :---: | :---: | :---: |
