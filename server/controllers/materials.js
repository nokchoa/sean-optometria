const material = require('../models').material;

module.exports = {
  create(req, res) {
    return material
      .create({
        nom_material: req.body.nom_material
      })
      .then(material => res.status(201).send(material))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
      return material
        .all()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
    }
};