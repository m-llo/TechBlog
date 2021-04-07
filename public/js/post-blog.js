/* To handle
BLOG - 
POST create new BLOG with button
blog PUT edit with button 
blog DESTROY Delete button with button

comment
POST create new BLOG with button
blog PUT edit with button 
blog DESTROY Delete button with button*/
async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#blog_title').value;
    const content = document.querySelector('#content').value;
    
   
    // Send fetch request to add a new dish
    const response = await fetch(`/api/home`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert('Failed to add blog');
    }
  }
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);