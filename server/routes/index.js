const controller = require('../controllers');
const models = require('../models');

module.exports = (app, passport) => {
  console.log(Object.keys(controller));
  console.log(Object.keys(models));
  Object.keys(controller).map((obj) => {
    app.post('/api/' + obj, controller[obj].create);
    app.get('/api/' + obj, controller[obj].list);
  });

    app.post('/login', controller.users.find);
};