window.addEventListener('hashchange', navigator, false);

function navigation() {
    if(location.hash.startsWith('#country=')) {
        configViewCountry();
    } else {
        homePage();
    }
}

function homePage() {
    
}