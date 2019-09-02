# API para gerenciamento de Bots.

O Case apresentado, solicita a criação de dois recursos, um para gerência de Bots e outro para mensagens.
No caso dos bots será um CRUD e no caso das mensagens, ela somente deverá ter as seguintes funcionalidades, i) criar mensagens de conversas, ii) permitir buscar a mensagem pelo seu id e iii) também permitir buscar todas as mensagens de uma conversa pelo id da conversa (Conversational ID).

## Desenho da solução proposta no case:
![Denhenho](https://github.com/pjdsant/apibotvivo/blob/master/images/DesenhoSolucao.png)

## Tecnologia Aplicada na Solução

### A solução para atender o Case proposto, usa Node.js para criar as chamadas Rest de backend, o banco de dados NoSql MongoDB, a solução de cache Redis.e a Docker.

 - Node.js é uma ambiente baseado em JavaScript, assíncrono e orientado a eventos, permitindo criar servidores leves, rápidos e escaláveis, além de ser multiplataforma (https://nodejs.org/en/).

 - MongoDB é um software de banco de dados orientado a documentos livre, não relacional, de código aberto e multiplataforma. (https://www.mongodb.com/).

 - O Redis é um armazenamento de estrutura de dados de chave-valor de código aberto e na memória e será utilizado para fazer o cache da API.

 - O Docker é uma plataforma open source que facilita a criação e administração de ambientes isolados (Container).

 - PostMan é a ferramenta que foi utilizada para os testes da API.

## Uso na Aplicação: 

O Node.js é utilizado para desenvolver em linguagem JavaScript a lógica do código que implementa as API Rest para o Bot.

O MongoDb é nosso banco de dados, onde as informações relacionadas aos recursos serão armanezadas.

Redis é o nosso servidor de cache, e será usado para melhorar a performance da nossa solução, por usar a memória principal ele minimiza o atraso na busca de dados nos servidores de banco de dados.

O Docker, foi escolhido por ser de fácil implementação e escalabilidade.

Para executar a solução desenvolvida, siga os passos abaixo:

1. Baixe o git o código do projeto.

2. Instale o Node.js e o Docker de acordo com o seu sistema operacional.
Node - https://nodejs.org/en/
Docker - https://docs.docker.com/v17.12/install/
Ferramenta para o desenvolvimento – Sugestão Visual Code https://code.visualstudio.com/download 

3. Instalar as dependências do projeto:
Pelo terminal/cmd, entrar no diretório do projeto, onde fica o package.json e utilizar o comando:
       ```sh
          $ npm install
       ```
4. Baixar e executar o MongoDB no Docker.
Pelo terminal/cm, executar os comandos:
    1. - Baixar a imagem do mongodb:
       ```sh
          $ docker pull tutum/mongodb
       ```
    2. – Criar o servidor:
       ```sh
          $ docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
       ```
    3. – Subir o servidor mongo:
    
        a) primeiro listar os containers e selecionar o referente ao MongoDB:
              ```sh
                 $ docker ps -a
              ```
           
        b) Iniciar o cliente do servidor:
              ```sh
                 $ docker start ContainerId
              ```
           
	      c) Manter o cliente aberto como como mostro na figura abaixo:
        
        ![MongoDb Client](https://github.com/pjdsant/apibotvivo/blob/master/images/Mongo_ClientStart.png)
        
5. Inicie o servidor node com o comando:
    ```sh
       $ node server.js
    ```
    ![Node start](https://github.com/pjdsant/apibotvivo/blob/master/images/Node_ServerStart.png)    
    
    
6. Realizar testes utilizando o Postman, para isso criei uma collection e disponibilizei junto ao código fonte no git, procure por [Postman Collection](https://github.com/pjdsant/apibotvivo/blob/master/postman/VivoBotApi.postman_collection.json)

Alguns exemplos dos testes realizados:

#### Obter todos os bots criados: 

 ![Bot GetAll](https://github.com/pjdsant/apibotvivo/blob/master/images/Bot_GetAll.png)  
 
#### Retornar um bot pelo Id: 

![Bot GetById](https://github.com/pjdsant/apibotvivo/blob/master/images/Bot_GetById.png)  

#### Criando um bot: 

![Bot Create](https://github.com/pjdsant/apibotvivo/blob/master/images/Bot_Create.png)  

#### Atualiza um bot: 

![Bot Update](https://github.com/pjdsant/apibotvivo/blob/master/images/Bot_Update.png)  

#### Deletando um bot: 

![Bot Delete](https://github.com/pjdsant/apibotvivo/blob/master/images/Bot_Delete.png)  

#### Listar todas a Mensagens: 

![Message GetAll(https://github.com/pjdsant/apibotvivo/blob/master/images/Message_GetAll.png)  

#### Listar uma mensagem pelo Id: 

![Message GetById](https://github.com/pjdsant/apibotvivo/blob/master/images/Message_GetById.png)  

#### Listar uma conversa pelo Id: 

![Message GetConversationaId](https://github.com/pjdsant/apibotvivo/blob/master/images/Message_GetConversationaId.png)  


