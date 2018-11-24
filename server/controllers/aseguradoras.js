const aseguradora = require('../models').aseguradora;

module.exports = {
  create(req, res) {
    return aseguradora
      .create({
        nom_aseguradora: req.body.nom_aseguradora,
      })
      .then(aseguradora => res.status(201).send(aseguradora))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return aseguradora
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};