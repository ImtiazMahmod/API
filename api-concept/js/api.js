///json placeholder
//HTTP methods
///get method
///post method
///patch method
///delete mathod

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
loadData();
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data))
}
loadUsers();
function posts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
posts();
function displayUser(data){
    const ul = document.getElementById('users');
    
    for (const user of data) {  
        // console.log(user);    
    const li = document.createElement('li'); 
    li.innerText = `New user name: ${user.name}`;
    ul.appendChild(li);
    }
}
function displayPost(posts){
    const blog = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    postTitle.innerText = `Posts`;
    postTitle.classList.add('posts');

   for (const post of posts) {
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
       `
       blog.appendChild(div);
   }
}

///post method
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
            title:'new post',
            body: 'best post of the year',
            id: 5
        }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(res=>res.json())
.then(data=>console.log(data));
}
addPost()