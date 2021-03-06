var images = ['adam.jfif', 'alexandre.jfif', 'coco.jfif', 'fernand.jfif', 'francois.jfif', 'hamza.jfif', 'herve.jfif', 'hugo.jfif', 'irene.jfif', 'jessy.jfif', 'julie.jfif', 'kevin.jfif', 'killian.jfif', 'malcolm.jfif', 'manu.jfif', 'mattis.jfif', 'moi.jfif', 'momo.jfif', 'nathan.jfif', 'nolan.jfif', 'ramzi.jfif'];

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./imgs/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * 21);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./imgs/${images[randomNumber]}"></img><br><h1>${images[randomNumber].split('.')[0]}</h1>`;
yourCard.appendChild(personToGuess)
var people = document.querySelectorAll('.card');

document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'all 0s'
        element.style.visibility = 'hidden'
    }
})