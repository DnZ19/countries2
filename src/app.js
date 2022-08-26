import axios from "axios";



const getCountries = async ( country ) => {

    let countryInput = "";

    try {

        const response = await axios.get(`https://restcountries.com/v2/name/${country}`);

        console.log(response)
        console.log(response.data[0].name)
        console.log(response.data[0].subregion)

        const {name, subregion, population, flag, currencies , capital} = response.data[0];

        const imageItem = document.createElement("IMG");
        imageItem.setAttribute("src", flag);
        document.getElementById("country-flag").appendChild(imageItem);

        const countryTitle = document.createElement("h1");
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




       //  const searchField = document.getElementById("site-search");
       //  searchField.addEventListener("keyup", handleChange);
       //
       //  function handleChange( e ) {
       //      countryInput = e.target.value;
       //      console.log(countryInput)
       //  }
       //
       //  const submitSearch = document.getElementById("button");
       //  submitSearch.addEventListener("click", handleSubmit);
       //
       // function handleSubmit( e )    {
       //     e.preventDefault();
       //     getCountries(countryInput);
       // }







        // const listItem = document.createElement("LI");
        // listItem.classList.add("recipeLabel");
        // const labelItem = document.createTextNode(label);
        // listItem.appendChild(labelItem);
        // document.getElementById("recipe-items").appendChild(listItem);



    } catch ( e ) {
        console.error( e )
    }
}

getCountries("egypt")




