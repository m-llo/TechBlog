const router = require('express').Router();

const apiRoutes = require('./api');
const startRoutes = require('./startRoutes');


router.use('/', startRoutes);
router.use('/api', apiRoutes);


module.exports = router;