const Class = require('../models').Class;

module.exports = {
    create: (req, res) => {
        return Class
            .create({
                name: req.body.name,
            }, {
                logging: false
            })
            .then((result) => {
                res.status(201).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(400).send(err);
            });
    },
    list: (req, res) => {
        return Class
            .all({
                logging: false
            })
            .then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(err);
                res.status(400).send(err);
            });
    },
}