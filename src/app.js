import axios from "axios";

let fieldValue = ""; //to catch the input from the search bar

const getCountries = async ( searchString ) => {



    try {

        const response = await axios.get(`https://restcountries.com/v2/name/${searchString}`);

        console.log(response);
        console.log(response.data[0].name)
        console.log(response.data[0].subregion)

        const {name, subregion, population, flag, currencies , capital} = response.data[0];

        const imageItem = document.createElement("IMG");
        imageItem.setAttribute("src", flag);
        document.getElementById("country-flag").appendChild(imageItem);

        const countryTitle = document.createElement("h2");
        countryTitle.textContent = `${name}`;
        document.getElementById("country-title").appendChild(countryTitle);

        const countryName = document.createElement("P");
        countryName.textContent = `${name} is situated in ${subregion}. It has a population of ${population} people.`;
        document.getElementById("country-info").appendChild(countryName);

        const numberOfCurrencies = response.data[0].currencies.length;

       if ( numberOfCurrencies === 1)  {
           const countryCurrency = document.createElement("P");
           countryCurrency.textContent = `The capital is ${capital} and you can pay with ${response.data[0].currencies[0].name}'s`;
           document.getElementById("country-info").appendChild(countryCurrency);
       } else  {
           const countryCurrency = document.createElement("P");
           countryCurrency.textContent = `The capital is ${capital} and you can pay with ${response.data[0].currencies[0].name}'s and ${currencies[1].name}'s`;
           document.getElementById("country-info").appendChild(countryCurrency);
       }

    } catch ( e ) {
        console.error( e )
        const countryError = document.createElement("P");
        countryError.textContent = `${searchString} is not a country! Please try again!`;
        document.getElementById("country-info").appendChild(countryError);

    }
}


// search field and button, to search for country information

const searchField = document.getElementById("search");
searchField.addEventListener("keyup", handleChange)

function handleChange(e){

    fieldValue = e.target.value;
    console.log(fieldValue);
}

const submitSearch = document.getElementById('search-field-submit');
submitSearch.addEventListener("submit", handleSubmit);


function handleSubmit(e){

    e.preventDefault()
    getCountries(fieldValue);
}

//reload button to refresh page / search after input / to try again

const reloadButton = document.getElementById("reload-button");
reloadButton.addEventListener("click", refreshPage)

function refreshPage()  {
    location.reload();
    return false;
}

// werkt niet....
// const renewSearch = document.getElementById("refresh-search");
// renewSearch.addEventListener("click", resetSearch)
//
//
// function resetSearch()  {
//     document.getElementById("country-flag").removeChild(imageItem);
//     document.getElementById("country-title").removeChild(countryTitle);
//     document.getElementById("country-info").removeChild(countryName);
//     document.getElementById("country-info").removeChild(countryCurrency);
//     document.getElementById("country-info").removeChild(countryError);
// }



