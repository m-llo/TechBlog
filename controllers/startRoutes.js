const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204);
    });res.render('login')
  } else {
    res.status(404).end();
  }
});

module.exports = router;
