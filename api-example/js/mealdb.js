///meal search api
const errorMessege = document.getElementById('error-messege');
errorMessege.style.display = 'none';
const inputError = document.getElementById('input-error');

const searchMeal = async () =>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    inputError.textContent ='';
    errorMessege.style.display = 'none';
    //if no input 
    if(inputText==''){       
        alert('Please enter your favorite meal');        
        const div = document.createElement('div');    
       div.innerHTML= `        
        <h3 class='text-center text-success mt-5'>Please enter your favorite meal</h3>
        `
        inputError.appendChild(div)
    }
    else{
        const  url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;

        try {
            const res = await fetch(url);
        const data = await res.json();
        dispalyMeal(data);
        } catch (error) {
            errorMessege.style.display = 'block';
        }
    /* fetch(url)
    .then(res => res.json())
    .then(data => dispalyMeal(data))
    .catch(error=> errorMessege.style.display = 'block') */
    }
    
   
}

const dispalyMeal = (food) =>{
    const showMeal = document.getElementById('show-meal');
    showMeal.textContent= '';
    const meals = food.meals;
    // console.log(meals);
    ///no result found
    if(meals== null){
        const div = document.createElement('div');       
       
        div.innerHTML= `        
        <h3 class='text-center text-success mt-5'>Please type accurate meal</h3>
        `
        inputError.appendChild(div)
    }
    else if(meals.length ==0){
        console.log('hi');
    }
    else{
        meals.forEach(meal => {    
            // console.log(meal);
              const div = document.createElement('div');
              div.classList.add('col');
                    div.innerHTML = `
                    <div class="card">
                    <img onclick="mealDetail('${meal.idMeal}')" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                </div>
              `
              showMeal.appendChild(div)
           })
    }
   
}

const mealDetail =async (mealId)=> {
    // console.log(mealId);    
    const url  = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const res = await fetch(url);
    const data = await res.json();
    dispalyMealDetail(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data=> dispalyMealDetail(data.meals[0]))
}

const dispalyMealDetail = (meal) => {
    // console.log(meal);
    const display = document.getElementById('display-meal-detail');
    display.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mx-auto my-5 text-center" style="width: 500px;">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
              <h5 class="card-title">${meal.strMeal}}</h5>
             <p class="card-text">${meal.strInstructions.slice(0,50)}</p>
                 <a href="${meal.strYoutube} target="_blank" class="btn btn-primary">View More</a>
        </div>
    </div>
`
display.appendChild(div);
}

console.log(`${7+1+2}`);