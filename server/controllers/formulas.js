const formula = require('../models').formula;

module.exports = {
  create(req, res) {
    return formula
      .create({
        formula_lejos: req.body.formula_lejos,
        formula_cerca: req.body.formula_cerca
      })
      .then(formula => res.status(201).send(formula))
      .catch(error => res.status(400).send(error));
  },
};