require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const alunosRoutes = require("./router/alunosRoutes");
const cursosRoutes = require("./router/cursosRoutes");
const indexRoutes = require("./router/indexRouter");


const app = express();

app.use(express.json());
app.use(cors());
db.connect();

app.use("/alunos", alunosRoutes);
app.use("/cursos", cursosRoutes);
app.use(indexRoutes)

module.exports = app;
