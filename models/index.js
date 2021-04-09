const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey:'userId',
    onDelete: 'CASCADE',
});

// User.hasMany(Comment, {
//     foreignKey:'user_id',
//     onDelete: 'CASCADE',
// });

Blog.hasMany(Comment,{
    foreignKey: 'blogId',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// Comment.belongsTo(Blog, {
//     foreignKey: 'blog_id',
    
// });

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports ={
    Blog, Comment, User
}