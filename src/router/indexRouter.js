const router = require("express").Router();

router.get("/", (request, response) => {
  response.send({
    versao: "1.0",
    titulo: "arca-de-noe",
    descricao:
      "",
  });
});

module.exports = router;

