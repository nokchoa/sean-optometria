const express = require('express');
const router = express.Router();
const Animal = require('../controllers').Animal;

router.post('/animal', Animal.create);
router.get('/animal', Animal.list);


module.exports = router;