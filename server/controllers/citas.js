const cita = require('../models').cita;

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
};