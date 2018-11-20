const express = require('express');
const router = express.Router();
const Class = require('../controllers').Class;

router.post('/class', Class.create);
router.get('/class', Class.list);


module.exports = router;