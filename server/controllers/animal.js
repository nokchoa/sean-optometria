const Animal = require('../models').Animal;

module.exports = {
    create: (req, res) => {
        return Animal
        .create({
            name: req.body.name,
            color: req.body.color,
            specieId: req.body.specieId,
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
        return Animal
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