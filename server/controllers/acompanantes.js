const acompanante = require('../models').acompanante;

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
};