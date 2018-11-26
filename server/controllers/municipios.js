const municipio = require('../models').MUNICIPIO;

module.exports = {
  create(req, res) {
    return municipio
      .create({
        nom_municipio: req.body.nom_municipio
      })
      .then(municipio => res.status(201).send(municipio))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return municipio
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};