const router = require('express').Router();
const Blog = require('../../models/User');
const Comment = require('../../models/Comment');


// route to get all dishes
router.get('/', async (req, res) => {
  const dishData = await Dish.findAll().catch((err) => { 
      res.json(err);
    });
      const dishes = dishData.map((dish) => dish.get({ plain: true }));
      res.render('all', { dishes });
    });