import {URL_API} from './../api.js';
const padre = document.querySelector('.main-container')
async function getAllCountries() {
    const response = await fetch(URL_API+'/all?fields=name,flags,population,region,capital');
    const dat = await response.json();
    dat.slice(0,8).forEach(element => {
        const hijo = `<article class="container-country__info">
        <div class="container__img">
            <img src="${element.flags.png}" alt="">
        </div>
        <div class="country__conatiner-description">
            <h3>${element.name.common}</h3>
            <p><span>Population:</span> ${element.population}</p>
            <p><span>Region:</span> ${element.region}</p>
            <p><span>Capital:</span> ${element.capital[0]}</p>
        </div>
    </article>`
        padre.innerHTML += hijo;
    });
}

async function getCountrie(country) {
    const res = await fetch(`${URL_API}/name/${country}?fields=name,flags,population,region,capital,subregion,currencies,languages,tld,borders`);
    const data = await res.json();

    console.log(data)
}

async function getCountriesByRegion(region) {
    const res = await fetch(`${URL_API}/region/${region}?fields=name,flags,population,region,capital`);
    const data = await res.json();
    console.log(data);
}


getCountrie('Belgium')
//getCountriesByRegion('America');
getAllCountries()