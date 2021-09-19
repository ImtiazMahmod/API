///random user
const randomUser = ()=>{
    fetch(`https://randomuser.me/api/?results=5`)
.then(res => res.json())
.then(data => displayUser(data.results))
}

randomUser();

const displayUser = (users) => {
    const userContainer = document.getElementById("random-user");

    users.forEach(user => {
        const div = document.createElement('div');
        // console.log(user);
        div.classList.add('user')
        div.innerHTML =`
        <img src="${user.picture.large}">
        <h3>Name:${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Street: ${user.location.street.name} ${user.location.street.number}</p>
        <p>City: ${user.location.city}</p>
        <p>Coordinates: ${user.location.coordinates.latitude}  ${user.location.coordinates.longitude}</p>
        <p>TimeZone: ${user.location.timezone.description} ${user.location.timezone.offset}</p>
        `
        userContainer.appendChild(div)
    });
}