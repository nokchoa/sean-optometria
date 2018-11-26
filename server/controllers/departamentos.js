const departamento = require('../models').DEPARTAMENTO;

module.exports = {
  create(req, res) {
    return departamento
      .create({
          nom_departamento: req.body.nom_departamento,
      })
      .then(departamento => res.status(201).send(departamento))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return departamento
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};