const Specie = require('../models').Specie;

module.exports = {
    create: (req, res) => {
        return Specie
            .create({
                name: req.body.name,
                classId: req.body.classId
            }, {
                logging: false
            })
            .then((result) => {
                res.status(201).send(result);
            }).catch((err) => {
                console.log('BODY:', req.body);
                console.log(err);
                res.status(400).send(err);
            });
    },
    list: (req, res) => {
        return Specie
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