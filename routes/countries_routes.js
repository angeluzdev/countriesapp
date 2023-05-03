import { getAllCountries, getCountrie, getCountriesByRegion } from "./../services/app.js";

window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);
const padreHome = document.querySelector('.countries-section');
const padreCountry = document.querySelector('.countrie-section')
function navigator() {
    if(location.hash.startsWith('#country=')) {
        configViewCountry();
    } else {
        homePage();
    }
}

function homePage() {
    padreHome.classList.remove('inactive');
    console.log('hola');
    getAllCountries();
}
function configViewCountry() {
    padreHome.classList.add('inactive');
    padreCountry.classList.remove('inactive');
}