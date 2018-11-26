const vereda = require('../models').VEREDA;

module.exports = {
  create(req, res) {
    return vereda
      .create({
        nom_vereda: req.body.nom_vereda
      })
      .then(vereda => res.status(201).send(vereda))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return vereda
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};