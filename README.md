# imersao-backend-google-gemini

Imersão Back-End com Google Gemini da Alura.

## Aula 1 Desvendando APIs e Servidores

Vamos importar o express pra declarar que ele será um módulo a ser usado, usaremos ele para criar o nosso servidor. E vamos usar o express para criar o servidor:

```js
const app = express();
```

O app representa o nosso servidor e agora vamos de fato utilizar esse servidor:

```js
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
```

O método listen faz com que o servidor esteja ouvindo e esteja pronto para atender solicitações da porta 3000. E a porta 3000 é usada justamente para servidores locais.

É importante lembrar que servidores são computadores, e acabamos de transformar nosso computador em um servidor local.

Continuando a configuração do servidor:

```js
app.get("/api", (req, res) => {
  res.status(200).send("Boas-vindas à Imersão!");
});
```

No método get vamos definir por qual rota o computador cliente vai chegar e solicitar o nosso servidor, usando o req e res, de requisição e resposta.

A resposta terá um status 200 e com conteúdo de texto, por exemplo. Para ver a rota funcionando, acesse no navegador:

```
localhost:3000/api
```

Existe uma forma de integrar o Gemini à nossa API, para isso, vamos gerar uma chave no site do Google AI Sudio:

```
https://alura.tv/google-gemini-api
```

## Aula 2 Criando e Estruturando sua Primeira API com GET e Banco de Dados

Podemos consultar os status de resposta pelo site:

```
https://http.cat/
```

Erros 400 são da faixa do cliente e erros 500 são da faixa do servidor.

Agora fazer um mock de dados usando placeholders (imagens genéricas), estaremos mockando dados que nada mais é do que uma base de dados local:

```js
const posts = [
  {
    descricao: "Uma foto da Millie",
    imagem: "https://placecats.com/millie/300/300",
  },
  {
    descricao: "Uma foto do Neo",
    imagem: "https://placecats.com/neo/300/300",
  },
  {
    descricao: "Uma foto da Bella",
    imagem: "https://placecats.com/bella/300/300",
  },
  {
    descricao: "Uma foto da Poppy",
    imagem: "https://placecats.com/poppy/300/300",
  },
  {
    descricao: "Uma foto do Louie",
    imagem: "https://placecats.com/louie/300/300",
  },
];
```

É necessário que declarar que o servidor irá devolver uma informação em json, dessa forma o express estará pronto para receber o texto e transformar em json para usarmos:

```js
app.use(express.json());
```

Vamos alterar a resposta para usar um método json e passar dentro desse método o array de posts:

```js
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});
```

Execute o servidor com o parâmetro watch, para o servidor reiniciar automaticamente toda vez que surgir uma alteração:

```js
node --watch server.js
```

Visualize o servidor em:

```
localhost:3000/posts
```

Esse /posts é um endpoint, é um endereço que vai servir um conjunto de dados. Mas podemos ter mais de um endpoint, mais de um endereço para servir coisas diferentes.

Mas precisamos agora de uma forma para visualizar apenas um post, para isso, precisamos criar um identificador para cada elemento do array:

```js
 {
    id: 1,
    descricao: "Uma foto da Millie",
    imagem: "https://placecats.com/millie/300/300",
  },
```

E para poder visualizarmos apenas um tipo de dado, criamos uma função para buscar o post pelo id:

```js
function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
```

Por fim, vamos requisitar esse post:

```js
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
```

E na barra de endreço, insira o índice:

```
localhost:3000/posts/2
```

É exatamente assim que uma API funciona, o cliente requisita algo e devolvemos isso em formato JSON.

Um próximo passo é instalar o MongoDB Atlas, que é um serviço que oferece um banco de dados do MongoDB na nuvem.

```
https://www.mongodb.com/cloud/atlas/register
```

Selecione o M0 e desmarque a opção Preload, escolha o método Drivers.
