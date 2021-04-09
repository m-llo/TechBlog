const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

// route to get all comments
router.get('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll().catch((err) => { 
      res.json(err);
    });
      const comment = commentData.map((comment) => Comment.get({ plain: true }));
      res.render('homepage', { comment });
    }catch (err) {
    res.status(500).json(err);
  }
});

// route to post new comment
router.post('/comment', withAuth, async (req, res) => {
  try {
     await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_ud: req.session.blog_id,
    });

    res.status(200);
    res.redirect('/blog')
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/deletecomment', withAuth, async (req, res) => {
  try {
     await Comment.destroy( 
      { where: {
        title: req.body.title,
        }
    });
    res.status(200);
    res.redirect('/blog')
  } catch (err) {
    res.status(400).json(err);
  }
});