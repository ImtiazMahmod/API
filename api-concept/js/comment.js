///comment get method

function addComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
addComment();
function displayComment(comments){
    const commentContainer = document.getElementById('commentContainer');
    
    for (const comment of comments) {
        // console.log(comment);
        const newComment = document.createElement('p');
        newComment.classList.add('comment')
        newComment.innerHTML =  `
        <h2>${comment.name}</h2>
        <p>${comment.body}</p>
        `
        commentContainer.appendChild(newComment)
    }
}
