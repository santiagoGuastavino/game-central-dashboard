let express = require('express');
let router = express.Router();
let { index } = require('../controllers/mainController');

router.get('/', index);

module.exports = router;