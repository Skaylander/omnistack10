const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express(); // por padrão não entende JSON

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-1uqld.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json()); // .use é válido para todas as rotas da aplicação
app.use(routes); // cadastra as rotas

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros dentro do express:
// Query Params: req.query (Filtros, ordenação, paginação, ...) GET
// Route Params: req.params (Identificar um recurso na alteração ou remoção) PUT/DELETE
// Body: req.body (Dados para a criação ou alteração de um registro) POST/PUT

// MongoDB (Não-relacional)

app.listen(3333);
