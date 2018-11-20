const departamento = require('../models').departamento;

module.exports = {
  create(req, res) {
    return departamento
      .create({
          nom_departamento: req.body.nom_departamento,
      })
      .then(departamento => res.status(201).send(departamento))
      .catch(error => res.status(400).send(error));
  },
};