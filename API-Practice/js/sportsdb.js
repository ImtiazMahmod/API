////sports zone
const sportsZone = () =>{
    const searchInput = document.getElementById('search-input');
    searchText = searchInput.value;
    searchInput.value = '';
    const diplayContainer = document.getElementById('display-detail');
    diplayContainer.textContent = '';
    // const container = document.getElementById('all-container');
    // container.textContent = '';
    
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
    .then(res => res.json())
    .then(data => displayTeam(data.teams))
}

const displayTeam = (teams)=>{
    const teamContainer = document.getElementById('team-container');
    teamContainer.textContent = '';
    teams.forEach(team => {
        const div = document.createElement('div');
        div.classList.add('col');
        // console.log(team);
        div.innerHTML =  `
        <div class="card" onclick="displayTeamDetail('${team.idTeam}')">
                            <img src="${team.strTeamBadge}" class="card-img-top w-75 mx-auto" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${team.strTeam}</h5>
                                <p class="card-text">${team.strDescriptionEN.slice(0,100)}</p>
                            </div>
        </div>     
        `
        teamContainer.appendChild(div)
    })
}

const displayTeamDetail = (teamId)=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
    .then(res => res.json())
    .then(data => detail(data.teams[0]))
}

const detail = (team)=> {
    const diplayContainer = document.getElementById('display-detail');
    diplayContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =  `
    <div class="card text-center w-75 mx-auto my-3")">
                            <img src="${team.strTeamBadge}" class="card-img-top w-50 mx-auto" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${team.strTeam}</h5>
                                <p class="card-text">${team.strDescriptionEN.slice(0,100)}</p>
                            </div>
        </div>     
    `
    diplayContainer.appendChild(div);
    
}

window.addEventListener("load",function(){
   const loader = document.querySelector('.loader');
   loader.className +='hidden';

});