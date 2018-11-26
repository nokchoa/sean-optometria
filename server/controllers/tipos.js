const tipo = require('../models').TIPO;

module.exports = {
  create(req, res) {
    return tipo
      .create({
        nom_tipo: req.body.nom_tipo
      })
      .then(tipo => res.status(201).send(tipo))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return tipo
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};