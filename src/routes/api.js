const router = require('express').Router();

router.use('/inmuebles', require('./api/inmuebles'));

module.exports = router;