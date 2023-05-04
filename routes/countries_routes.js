import { getAllCountries, getCountrie, getCountriesByRegion } from "./../services/app.js";

window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

document.querySelector('#inputSearch').addEventListener('change', (e) => {
    location.hash='#search='+e.target.value;
});
document.querySelector('#inputSelect').addEventListener('change', (e) => {
    location.hash='#region='+e.target.value;
})

const padreHome = document.querySelector('.countries-section');
const padreCountry = document.querySelector('.countrie-section');
const headerNav = document.querySelector('.header__nav');
function navigator() {
    if(location.hash.startsWith('#country=')) {
        configViewCountry();
    } else if(location.hash.startsWith('#search=')) {
        configViewSearch();
    } else if(location.hash.startsWith('#region=')) {
        configViewRegion();
    } else {
        homePage();
    }
}

function homePage() {
    padreHome.classList.remove('inactive');
    padreCountry.classList.add('inactive');
    headerNav.classList.remove('inactive');
    console.log('hola');
    getAllCountries();

}
function configViewCountry() {
    padreHome.classList.add('inactive');
    padreCountry.classList.remove('inactive');
    headerNav.classList.add('inactive');
    const country = location.hash.split('=');
    console.log(country)
    getCountrie(country[1])
}

function configViewSearch() {
    headerNav.classList.remove('inactive');
    padreHome.classList.add('inactive');
    padreCountry.classList.remove('inactive');
    const country = location.hash.split('=')
    getCountrie(country[1]);
}

function configViewRegion() {
    headerNav.classList.remove('inactive');
    padreHome.classList.remove('inactive');
    padreCountry.classList.add('inactive');
    const country = location.hash.split('=');
    getCountriesByRegion(country[1]);
}
/*document.querySelector('.countries-section').addEventListener('click', (e) => {
    if(e.target.nodeName == 'ARTICLE') {
        console.log('hola')
    }
})*/