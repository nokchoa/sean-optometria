const examen = require('../models').examen;

module.exports = {
  create(req, res) {
    return examen
      .create({
        valores_examen: req.body.valores_examen
      })
      .then(examen => res.status(201).send(examen))
      .catch(error => res.status(400).send(error));
  },
};