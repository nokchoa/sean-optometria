const acompanantesController = require('../controllers').acompanantes;
const aseguradorasController = require('../controllers').aseguradoras;
const citasController = require('../controllers').citas;
const departamentosController = require('../controllers').departamentos;
const examensController = require('../controllers').examens;
const formulasController = require('../controllers').formulas;
const controller = require('../controllers');

module.exports = (app) => {
  console.log(controller);
  console.log(Object.keys(controller));
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the acompanantes API!',
  }));

  app.post('/api/acompanantes', acompanantesController.create);


  app.post('/api/aseguradoras', aseguradorasController.create);


  app.post('/api/citas', citasController.create);


  app.post('/api/departamentos', departamentosController.create);

  
  app.post('/api/examens', examensController.create);


  app.post('/api/formulas', formulasController.create);
};