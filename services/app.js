import {URL_API} from './../api.js';
const padre = document.querySelector('.countries-section');

const countries = (container, iterable, limit) => {
    iterable.slice(0,limit).forEach(element => {
        const hijo = `<article class="container-country__info" data-country="${element.name.common}">
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
        container.innerHTML += hijo;
        
    });
    document.querySelectorAll('.container-country__info').forEach(e => {
        e.addEventListener('click', () => {
            location.hash ='#country='+e.dataset.country;
        })
    })
}

async function getAllCountries() {
    const response = await fetch(URL_API+'/all?fields=name,flags,population,region,capital');
    const dat = await response.json();
    padre.innerHTML = ''
    countries(padre, dat, 9)
}

async function getCountrie(country) {
    const res = await fetch(`${URL_API}/name/${country}?fields=name,flags,population,region,capital,subregion,currencies,languages,tld,borders`);
    const data = await res.json();
    const infoCountry = document.querySelector('.countrie-section__info');


    const structHtml = `
    <div class="countrie_cotainer-img">
        <img src="${data[0].flags.png}" alt="">
    </div>

    <div class="countrie-section-description">
        <h3>${data[0].name.common}</h3>
        <div class="countrie__dates">
            <div class="dates_left">
                <p><span>Native Name: </span>${data[0].name.common}</p>
                <p><span>Population: </span>${data[0].population}</p>
                <p><span>Region: </span>${data[0].region}</p>
                <p><span>Sub Region: </span>${data[0].subregion}</p>
                <p><span>Capital: </span>${data[0].capital}</p>
            </div>
            <div class="dates_right">
                <p><span>Top Level Domain: </span>${data[0].tld[0]}</p>
                <p><span>Currencies: </span>België</p>
                <p><span>Languages: </span>België</p>
            </div>
        </div>

        <div class="countrie__container-borders">
            <p>Border Countries</p>
            <div class="borders">
                
            </div>
        </div>
    `;
    infoCountry.innerHTML = structHtml; 
    const borderContainer = document.querySelector('.borders');
    const buttons = [];
    data[0].borders.forEach(i => {
        const button = document.createElement('button');
        const text = document.createTextNode(i);
        button.append(text);
        button.addEventListener('click', () => {
            location.hash = 'code='+i;
        })
        buttons.push(button);
    })

    borderContainer.append(...buttons);

    console.log(data)
}

async function getCountriesByRegion(region) {
    const res = await fetch(`${URL_API}/region/${region}?fields=name,flags,population,region,capital`);
    const data = await res.json();

    padre.innerHTML = '';
    countries(padre, data, -1);
}

export {getAllCountries, getCountrie, getCountriesByRegion};
//getCountrie('Belgium')
//getCountriesByRegion('America');
//getAllCountries()