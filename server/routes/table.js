const express = require('express');
const router = express.Router();
const Table = require('../controllers').Table;

router.delete('/table', Table.purge);

module.exports = router;