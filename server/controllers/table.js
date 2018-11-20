const sequelize = require('../models').sequelize;

module.exports = {
    purge: (req, res) => {
        return sequelize.sync({
                force: true,
                logging: false
            })
            .then((result) => {
                res.status(202).send({message: 'All tables were purged'});
            }).catch((err) => {
                console.log(err);
                res.status(400).send(err);
            });
    }
}