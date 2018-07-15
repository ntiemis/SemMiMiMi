var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

// busca todos os usuarios
router.get('/usuarios', (req, res) => {
  req.db.collection('usuario').find().toArray((err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      res.send(data);
  });
});

// busca um usuario pelo id
router.get('/usuario/:id', (req, res) => {
  let query = {
      _id: ObjectID(req.params.id)
  };

  
  req.db.collection('usuario').findOne(query, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      if(!data){
          res.status(404).send();
          return;
      }

      res.send(data);
  });
});
// busca um usuario pelo nome
router.get('/usuario/nome/:nome', (req, res) => {
  
  let query = {
      nome: {'$regex': `.*${req.params.nome}.*`}
  };
  
  req.db.collection('usuario').findOne(query, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      if(!data){
          res.status(404).send();
          return;
      }

      res.send(data);
  });
});
// busca um usuario pelo email
router.get('/usuario/email/:email', (req, res) => {
  
  let query = {
      email: {'$regex': `.*${req.params.email}.*`}
  };
  
  req.db.collection('usuario').findOne(query, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      if(!data){
          res.status(404).send();
          return;
      }

      res.send(data);
  });
});



//insere um novo cadastro
router.post('/cadastro', (req, res) => {
  //remove dados indesejados do body
  let cadastro = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      nascimento: req.body.nascimento
  };

  // exemplo de validação de email
  if(req.body.email.indexOf('@') == -1){
      res.status(400).send({mensagem: 'Email inválido'});
      return;
  }

  req.db.collection('usuario').insert(cadastro, (err) => {
      if(err){
          res.status(500).send();
          return;
      }

      res.send(req.body);
  });
});

// atualiza um usuario pelo id
router.put('/usuario/:id', (req, res) => {
  let query = {
      _id: ObjectID(req.params.id)
  };

  let cadastro = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      nascimento: req.body.nascimento
  };

  req.db.collection('usuario').updateOne(query, cadastro, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      res.send(data);
  });
});

//atualiza um usuario pelo nome

router.put('/usuario/nome/:nome', (req, res) => {
  
  let query = {
      nome: {'$regex': `.*${req.params.nome}.*`}
  };
  let cadastro = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      nascimento: req.body.nascimento
  };

  req.db.collection('usuario').updateOne(query, cadastro, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      res.send(data);
  });
});

// deleta um usuario pelo id
router.delete('/usuario/:id', (req, res) => {
  let query = {
      _id: ObjectID(req.params.id)
  };

  req.db.collection('usuario').deleteOne(query, (err, data) => {
      if(err){
          res.status(500).send();
          return;
      }

      res.send(data);
  });
});

module.exports = router;

