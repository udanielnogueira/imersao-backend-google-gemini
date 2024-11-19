import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto da Millie",
    imagem: "https://placecats.com/millie/300/300",
  },
  {
    id: 2,
    descricao: "Uma foto do Neo",
    imagem: "https://placecats.com/neo/300/300",
  },
  {
    id: 3,
    descricao: "Uma foto da Bella",
    imagem: "https://placecats.com/bella/300/300",
  },
  {
    id: 4,
    descricao: "Uma foto da Poppy",
    imagem: "https://placecats.com/poppy/300/300",
  },
  {
    id: 5,
    descricao: "Uma foto do Louie",
    imagem: "https://placecats.com/louie/300/300",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
