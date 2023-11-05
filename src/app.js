function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#Weather-App-City");
    cityElement.innerHTML = searchInput.value;
}

let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit",handleSearchSubmit);