pageLoader();

function pageLoader(){
    console.log('Loading The Page with Functionality...')
    const colorButtons = document.getElementsByClassName('light-dark-button');
    for (let btn of colorButtons){
        btn.addEventListener('click', changeBackgroundColor);
    };

    const findCountryForm = document.querySelector('#f');
    findCountryForm.addEventListener('submit', e => findCountries(e, 1));

}