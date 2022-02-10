//importação do módulo express
const express = require("express");

const express = require("../data/conexao");

const verificaToken = require("../middleware/verificaToken");

const router = express.Router();

/*
Rotas para o pedido 
  - /buscar/:id -> Localizar pedido específico                  Verbo GET
  - /usuario/:id -> Localizar os pedidos do usuario             Verbo GET
  - /cadastrar -> Realizar o cadastro do pedido                 Verbo POST
*/
router.get("/buscar/:id", verificaToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pedido WHERE idpedido=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.get("/usuario/:id", verificaToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pedido WHERE idusuario=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.post("/cadastrar", verificaToken, (req, res) => {
    conexao.query("INSERT INTO pedido SET ?", [req.body], (erro, resultado) => {
      if (erro)
        return res.status(500).send({ retorno: `Erro interno ->${erro}` });
      res.status(201).send({ retorno: resultado });
    });
  });

  module.exports = router;
  