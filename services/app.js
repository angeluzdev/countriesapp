import {URL_API} from './../api.js';
const padre = document.querySelector('.main-container')
console.log(padre)
async function getAllCountries() {
    const response = await fetch(URL_API);
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
    console.log(dat.slice(0,8));
}

getAllCountries()