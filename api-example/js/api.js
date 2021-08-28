///random user...
const randomUser = ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getUser(data));
}
// randomUser();

const getUser = (users)=> {
    const buddies = users.results;
    console.log(buddies);

    for (const buddy of buddies) {
        const userContainer = document.getElementById('user-container');

    const p = document.createElement('p');
    p.innerHTML = `
        email: ${buddy.email} \n name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
    `    
    userContainer.appendChild(p);
    }
    
}

///rest country api

const country = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => getCountry(data))
}
country();
const getCountry = (countries) =>{
   const countryContainer = document.getElementById('country-container');  
   countryContainer.classList.add('countryContainer')

//    for (const country of countries) {
//        const div = document.createElement('div');

//         div.innerHTML = `
//         <h2>Country Name: ${country.name}</h2>
//         <h3>Capital: ${country.capital}</h3>
//         <p>Population: ${country.population}</p>
//         `
//         countryContainer.appendChild(div)

//    }

    countries.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country');
    // div.style.border = '2px solid red';
    div.innerHTML = `
        <h2>Country Name:\n ${country.name}</h2>
        <h3>Capital: ${country.capital}</h3>
        <p>Population: ${country.population}</p>
        <button onclick="loadCountry('${country.name}')">Load Country</button>
        `
       countryContainer.appendChild(div)
});
}

const loadCountry = (name) => {
   
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => displayName(data[0]));
} 
 const h3 = document.createElement('h3');

const displayName = country => {
    const countryName = document.getElementById('country');
console.log(country);
  
    h3.innerHTML = `
       <p> Name: ${country.name}</p>
        <img width='200px' src="${country.flag}"> 
    `
    countryName.appendChild(h3)
}



