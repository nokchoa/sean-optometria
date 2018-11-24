const controller = require('../controllers');

module.exports = (app) => {
  Object.keys(controller).map((obj) => {
    app.post('/api/' + obj, controller[obj].create);
    app.get('/api/' + obj, controller[obj].list);
  });
};