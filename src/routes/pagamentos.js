//importação do módulo express
const express = require("express");

const express = require("../data/conexao");

const verificaToken = require("../middleware/verificaToken");

const router = express.Router();

/*
Rotas para realizar as seguintes operações no pagamento
  - /usuario/:id -> Listar os pagamentos relacionados a um usuário                Verbo GET
  - /pedido/:id -> Listar os pagamentos relacionados a um pedido                  Verbo GET
  - /cadastrar -> Cadastro do pagamento de um pedido                              Verbo POST

*/

router.get("/usuario/:id", verificaToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pagamento WHERE idusuario=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.get("/pedido/:id", verificaToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pagamento WHERE idpedido=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.post("/cadastrar", verificaToken, (req, res) => {
    conexao.query(
      "INSERT INTO pagamento SET ?",
      [req.body],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(201).send({ retorno: resultado });
      }
    );
  });

  module.exports = router;