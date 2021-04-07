const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/blog', homeRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
