const user = require('../models').User;

module.exports = {
  create(req, res) {
    return user
      .create({
        user: req.body.user,
        password: req.body.password,
        type: req.body.type
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return user
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  find(req, res) {
    return user
      .findOne({
        where: {
          user: req.body.user
        }
      }).then(user => {
        if (user.password === req.body.password) {
          res.status(200).send(user);
        } else {
          res.status(400).send({message: "wrong password"});
        }
      }).catch(err => {
        res.status(400).send(err);
      });
  }
};
