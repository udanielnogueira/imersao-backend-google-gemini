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

Chave gerada:

```
AIzaSyAZHd4v9UEk40D11Io1YtRtsfSEq5oJcg4
```
