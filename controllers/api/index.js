const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/home', homeRoutes, commentRoutes);


module.exports = router;
