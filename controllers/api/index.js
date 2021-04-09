const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes')

router.use('/blog', homeRoutes);
router.use('/comment', commentRoutes);
router.use('/login', userRoutes)
router.use('/new', userRoutes)

module.exports = router;
