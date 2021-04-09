/* To handle
BLOG - 
POST create new BLOG with button
blog PUT edit with button 
blog DESTROY Delete button with button

comment
POST create new BLOG with button
blog PUT edit with button 
blog DESTROY Delete button with button

need html id's or classes for blog update/delete, comment add/delete
need new blog button in html that starts new-blog-form
*/



const deleteButton = document.querySelector('#blog_delete');
deleteButton.addEventListener('click', blogDelete);

const commentAddButton = document.querySelector('.commentAddform');
commentAddButton.addEventListener('submit', addComment);

const commentDeleteButton = document.querySelector('.commentDeleteButton');
commentDeleteButton.addEventListener('click', commentDelete);


document.querySelector('#blog_submit').addEventListener('submit', newBlogPost);

async function newBlogPost(event) {
    event.preventDefault();
    const title = document.querySelector('#blog_title').value;
    const content = document.querySelector('#content').value;

    // Send fetch request to add a new blog
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content,
        
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the blog is added, the 'homepage' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog');
    }
  };
  
  async function blogDelete () {
    const title = document.querySelector('#blogTitle').value;
    const response = await fetch('/api/delete', {
            method: 'DELETE',
            body: JSON.stringify({
                title: title
            })
        }); if (response.ok) {
            document.location.replace('/home');
          } else {
            alert('Failed to delete blog');
          }
  };
  
  async function addComment () {
    const title = document.querySelector('.comment_title').value;
    const content = document.querySelector('.comment_content').value;
    const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content,
                
            })
        }); if (response.ok) {
            document.location.replace('/home');
          } else {
            alert('Failed to add comment');
          }
  };

  async function commentDelete () {
    const title = document.querySelector('.comment_title').value;
    const response = await fetch('/api/deletecomment', {
            method: 'DELETE',
            body: JSON.stringify({
                title: title
            })
        }); if (response.ok) {
            document.location.replace('/home');
          } else {
            alert('Failed to delete comment');
          }
  };
 
  
  
