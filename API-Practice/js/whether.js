///key trigger on enter
const temp = document.getElementById("temp");
const cityName = document.getElementById("city-name");

cityName.addEventListener("keypress", function(event) {
    // event.preventDefault();
    if (event.key === 'Enter')
        temp.click();
});


///whether api
const displayTemp = document.getElementById('display-temperature');

const temperature =()=>{
    const nameInput = document.getElementById('city-name');
    const nameText = nameInput.value;
    nameInput.value = '';
    const apiKey = '067337c4f103db444962a9835e74579e'

    displayTemp.textContent = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameText}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemperature(data))
    .catch(()=>{
        displayTemp.textContent = 'Please search for a valid city 😩';
    }
    )
}

const displayTemperature = (data)=> {
    console.log(data); 
    const icon = `https://openweathermap.org/img/wn/${
        data.weather[0]["icon"]
      }@2x.png`;
     
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>${data.name} <sup>${data.sys.country}</sup></h1>
    <div>${Math.round(data.main.temp)}<sup>°C</sup></div>
    <figure>
          <img src=${icon} alt=${data.weather[0]["main"]}>         
        
    <figcaption>${data.weather[0]["main"]}</figcaption>
    </figure>
    `
    displayTemp.appendChild(div);
    
}