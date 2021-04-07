const router = require('express').Router();
const Blog = require('../../models/User');
const withAuth = require('../../utils/auth');

// route to get all blogs
router.get('/home', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
      const blogs = blogData.map((blog) => Blog.get({ plain: true }));
      res.render('homepage', { blogs });
    }catch (err) {
    res.status(500).json(err);
  }
});

// route to post new blog
router.post('/home', withAuth, async (req, res) => {
  try {
     await Blog.create({
      title: req.body.title,
      content: req.body.content,
      post_date: req.params.date_string,
      user_id: req.session.user_id,
    });

    res.status(200);
    res.redirect('/home')
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/home', withAuth, async (req, res) => {
  try {
     await Blog.Update(req.body, 
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

router.delete('/home', withAuth, async (req, res) => {
  try {
     await Blog.destroy( 
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

