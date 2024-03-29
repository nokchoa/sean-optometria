const cita = require('../models').CITA;

module.exports = {
  create(req, res) {
    return cita
      .create({
        fecha: req.body.fecha,
        motivo: req.body.motivo
      })
      .then(cita => res.status(201).send(cita))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return cita
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};