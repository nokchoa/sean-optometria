const acompanante = require('../models').ACOMPANANTE;

module.exports = {
  create(req, res) {
    return acompanante
      .create({
        nom_acompanante: req.body.nom_acompanante,
        parentesco: req.body.parentesco,
        telefono: req.body.telefono
      })
      .then(acompanante => res.status(201).send(acompanante))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return acompanante
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  }
};
