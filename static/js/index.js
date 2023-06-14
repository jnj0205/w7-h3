pageLoader();

function pageLoader(){
    const navLinks = document.getElementsByClassName('navbar-link')
    for (let link of navLinks){
        link.addEventListener('click',changeDiv)
    }
    const findCountriesForm = document.querySelector('#form');
    findCountriesForm.addEventListener('submit',e=>findCountry(e));

}
function findCountry(event){
    event.preventDefault();
    const country = event.target.elements[0].value;
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const result = fetch(url)
    .then(response=>response.json())
    .then(data => displayCountry(data))
    .catch(err => console.error(err))
}

function displayCountry(data){
    console.log(data)
    const capital= data[0].capital[0]


    const container = document.createElement('div')
    const heading = document.createElement('h2')
    heading.innerText = capital
    container.appendChild(heading)
    const home = document.querySelector('#home')
    home.appendChild(container)

    const coa = document.createElement('img')
    coa.src = data[0].coatOfArms.png
    container.appendChild(coa)


    
}