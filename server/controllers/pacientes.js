const paciente = require('../models').PACIENTE;

module.exports = {
  create(req, res) {
    return paciente
      .create({
        nom_paciente: req.body.nom_paciente,
        apellido1_paciente: req.body.apellido1_paciente,
        apellido2_paciente: req.body.apellido2_paciente,
        ocupacion: req.body.ocupacion,
        telefono: req.body.telefono
      })
      .then(paciente => res.status(201).send(paciente))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return paciente
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};
