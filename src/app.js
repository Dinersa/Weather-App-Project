function refreshWeather(response) {
    let temparatureElement = document.querySelector("#temparature");
   let temparature = response.data.temparature.current;
    temparatureElement.innerHTML = Math.round(temparature);
}

function searchCity(city){
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5ff91039bfoa7d3c00e40a4db3ace0et&units=metric`;
     axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit",handleSearchSubmit);