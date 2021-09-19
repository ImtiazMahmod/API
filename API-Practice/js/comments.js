//js comments
const loadComments = ()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(res => res.json())
.then(data => displayComments(data))
}
loadComments();

const displayComments = (comments) =>{
    const commentContainer = document.getElementById('comments');
    
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment')
        
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <button onclick=displayComment('${comment.id}')>Diplay comment</button>
        
        `
        commentContainer.appendChild(div);
    });
}

const displayComment =async (commentId) => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`

    const res = await fetch(url);
    const data = await res.json();
    displayCommentDetail(data);
}

const displayCommentDetail = (detailComment) => {
   const commentDetail = document.getElementById('comment-detail');
   commentDetail.textContent = '';

   detailComment.forEach(detail => {
        const div = document.createElement('div');        
        div.innerHTML = `
        <h3>${detail.name}</h3>
        <p>${detail.body}</p>
        `
        commentDetail.appendChild(div)
   })
   
}