//remove the item from the list
let listItem =document.querySelectorAll('li');
console.log(listItem [2]);
listItem[2].remove();
const newcountry =document.createElement('li');

//add country to the list
newcountry.textContent ='China';
document.querySelector('ol').append(newcountry);

//set background color
document.querySelector('body').style.background = 'pink';

//Change the backround color of every other item in the list to grey
listItem =document.querySelectorAll('li');
for(let i=0; i<listItem.length; i+=2){
    listItem[i].style.background ='yellow'; 
}

//Use array and loop to add alt least three more countries to the list
const countries = [ 'Austria', 'Switzerland', 'Spain', 'Germany', 'Italy'];
for(country of countries) {
    let newCountry = document.createElement('li');
    newCountry.textContent = country;
    document.querySelector('ol').append(newCountry);
}
//Change the backround color of every other item in the list to grey
listItem =document.querySelectorAll('li');
for(let i=0; i<listItem.length; i+=2){
    listItem[i].style.background ='yellow'; 
}

const infobox = document.querySelector('#infobox');
const flagimage =document.querySelector('#flag');

//list in the array county copulations & codes
const populations = [144, 5.5, 5.4, 0.4, 37.5, 1393000, 8.9, 8.6, 47, 83, 60.3]; 
const countrycode = ['ru', 'fi', 'no', 'is','ca', 'cn', 'at', 'ch', 'es', 'de', 'it'];

//with pointing at the country the population is shown
for (const [index, li] of listItem.entries()) {
    console.log(index, li);
    li.addEventListener('mouseover', () => {
        infobox.textContent = populations[index] + ' million people';
        flagimage.src = 'https://flagcdn.com/72x54/' + countrycode[index] +'.png';

    });
}
