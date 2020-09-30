var title = document.querySelector('h1');
title.textContent = 'Mudei';

var city = document.querySelector('#city');
console.log(city);

city.textContent = 'São Paulo (SP)';

var personalDataArray = document.querySelectorAll('.personal-data');
personalDataArray = Array.from(personalDataArray);

console.log(personalDataArray);

var data = Array.from(document.querySelectorAll('.data'));

for (var i = 0; i < data.length; i++) {
  var currentElement = data[i];
  currentElement.classList.add('emphasis');
}
