const express = require('express');
const router = express.Router();
const Specie = require('../controllers').Specie;

router.post('/specie', Specie.create);
router.get('/specie', Specie.list);


module.exports = router;