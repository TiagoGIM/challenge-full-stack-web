# Este arquivo explicará : 
## Decisão da arquitetura utilizada

### Arquitetura Web

- Arquitetura base é a MVVM gerada automaticamente pela **Vue CLI**. Também foram criados outros diretórios para seguimentar algumas responsabilidades seguindo a mesma estratégia. A pasta web representa a raíz da aplicação.
```
├── web
|   ├──public
|   ├──scr
|       ├──components
|           ├──buttons
|           ├──dialogs
|           ├──forms
|           ├──tables
|       ├──views
|       ├──plugins
|       ├──services
|       ├──store
|   ├──tests
```
- componentes: elementos genéricos que podem ser usados individualmente ou combinados para compor outro componente.
    -- buttons: são 3 tipos de botões que usam recursos diferentes para realizar uma ação: emitir um evento, usar função como props e editar váriavies no store. 
    -- forms: formulários personalizados para a post na API.
    -- layouts: componentes gerais para renderizar a SPA principal.
    -- tables: componentes que renderiza lista de dados
- router: especificação e configuração das rotas do app.
- views: são as telas principais da aplicação, renderizadas com base no layout(No caso só temos o principal) e compostar por componentes de acordo com suas funções.
- service : arquivos com a camada de comunicação com a api.

## Arquitetura Backend (API)
- Foi feita seguindo o padrão Model View Controllers (MVC), onde cada diretório tem seus arquivos organizados por responsabilidades, e também foi criado o diretório database e erros. A raiz da api é o diretório backend.
( a camada de serviçoes para abstrair mais o controller deu problemas então foi retirada desta versão).

```
├── backend
|   ├──scr
|       ├──controllers
|       ├──database
|           ├──migrations
|       ├──errors
|       ├──models
|       ├──views
|
```
      - controllers: comunicacao com o banco de dados
      - models: arquivos relacionados ao tratamento dos dados 
      - controllers: manipulação do CRUD.
      - database: configurações relativas a conexão com database e as migrations.
      - erros: handlers de erros, ex.:  validação de dados e asyncs.



## Lista de bibliotecas de terceiros utilizadas
### Web
- babel
- vuetify
- vueMask
- axios
- cors
### Backend

- typescript
- cors
- express
- express-async-errors
- typeorm 
- yup

## O que você melhoraria se tivesse mais tempo
-  Implementação da parte de segurança em ambos os lados da aplicação, pra evitar ataques e injections no banco de dados.

- Websockets para emitir eventos entre clientes, em caso de uso por mais de uma pessoa.

- O desenho do front-end, como foquei nas funcionalidades acabei por negligênciar a experência visual do usuário.

- Corrigir os bugs de responsividade que ficaram devido ao fato de eu tentar usar diferentes recuros em poucas regras de negocios.

- Também gostaria de ter feito TDD em cima dos componentes.

- Injeção de dependencias na parte do backend, comecei a implementar porém devido aos bugs no front, por ter pouca experincia no Vue, tive que focar no básico da API para cumprir com o deadline do projeto completo, foco no MVP.

## Quais requisitos obrigatórios que não foram entregues
Todos os requisitos foram entregues.

## BONUS

Toda a aplicação está funcionando em CI-CD na nuvem usando dois servições diferentes, o **HEROKU** para o banco de dados e API, e o **netliFy** que pode ser acessado neste endereço:
[CLIKE AQUI PARA TESTAR](https://desafiogrupoa.netlify.app/)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/41b07752-08c5-4124-b852-07b420d4217b/deploy-status)](https://app.netlify.com/sites/desafiogrupoa/deploys)
