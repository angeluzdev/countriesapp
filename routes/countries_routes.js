import { getAllCountries, getCountrie, getCountrieByCode, getCountriesByRegion } from "./../services/app.js";

window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

document.querySelector('.header__container-input').addEventListener('submit', (e) => {
    e.preventDefault();
    const values = document.querySelector('#inputSearch').value;
    location.hash='#search='+values;
});
document.querySelector('#inputSelect').addEventListener('change', (e) => {
    location.hash='#region='+e.target.value;
})
document.querySelector('.container_button button').addEventListener('click', () => {
    history.back();
})
document.querySelector('.header__togle-mode').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark')
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
    } else if(location.hash.startsWith('#code=')) {
        configViewCode();
    } else {
        homePage();
    }
}

function homePage() {
    padreHome.classList.remove('inactive');
    padreCountry.classList.add('inactive');
    headerNav.classList.remove('inactive');
    
    getAllCountries();

}
function configViewCountry() {
    padreHome.classList.add('inactive');
    padreCountry.classList.remove('inactive');
    headerNav.classList.add('inactive');
    const country = location.hash.split('=');
    
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

function configViewCode() {
    padreHome.classList.add('inactive');
    padreCountry.classList.remove('inactive');
    headerNav.classList.add('inactive');
    const code = location.hash.split('=');
    getCountrieByCode(code[1]);
}
