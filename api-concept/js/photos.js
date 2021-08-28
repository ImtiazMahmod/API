////photo get method

function getPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}
// getPhoto();
function displayPhoto(photos){
    const photoContainer = document.getElementById('photo-container');

    for (const photo of photos) {
        // console.log(photo);
       const newPhoto = document.createElement('div');
       
       newPhoto.innerHTML = `
       <h2>${photo.title}</h2>
       <img src="images/coder.png">
       `
        photoContainer.appendChild(newPhoto);
    }
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 });
 console.log(stuInfo.name);