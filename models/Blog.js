const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{}

Blog.init(
   {
    // blog_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_date:{
        type: DataTypes.DATE,
        allowNull: false,
      }, 
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'user',
      //     key: 'user_id',
      //   },
      // },
   },
  {
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'blog',
  }
);

module.exports = Blog;