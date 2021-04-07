const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

// route to get all blogs
router.get('/home', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll().catch((err) => { 
      res.json(err);
    });
      const comments = commentData.map((comment) => Comment.get({ plain: true }));
      res.render('homepage', { comments });
    }catch (err) {
    res.status(500).json(err);
  }
});

// route to post new blog
router.post('/home', withAuth, async (req, res) => {
  try {
     await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_ud: req.session.blog_id,
    });

    res.status(200);
    res.redirect('/home')
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/home', withAuth, async (req, res) => {
  try {
     await Comment.destroy( 
      { where: {
        title: req.body.title,
        }
    });
    res.status(200);
    res.redirect('/home')
  } catch (err) {
    res.status(400).json(err);
  }
});