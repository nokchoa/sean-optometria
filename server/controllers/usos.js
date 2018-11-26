const uso = require('../models').USO;

module.exports = {
  create(req, res) {
    return uso
      .create({
        nom_uso: req.body.nom_uso
      })
      .then(uso => res.status(201).send(uso))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return uso
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};