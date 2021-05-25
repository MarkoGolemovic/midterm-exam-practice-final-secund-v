export class PenguinView {
    constructor() {
        this.storeButton = document.querySelector('#storeButton');
        this.listOfPenguins = document.querySelector('#listOfPenguins');
        this.previousPenguinButton = this.listOfPenguins.querySelector('#previousPenguinButton');
        this.nextPenguinButton = this.listOfPenguins.querySelector('#nextPenguinButton');

        //Embed custom data attribute on buttons to emebd info about the previous and next penguin index. 
        //More on using data attributes at https://www.w3schools.com/tags/att_data-.asp
        this.previousPenguinButton.setAttribute('data-penguin-index', '0');
        this.nextPenguinButton.setAttribute('data-penguin-index', '2');
    }

    render(penguin) {
        this.listOfPenguins.querySelector('h3').textContent = penguin.name;
        this.listOfPenguins.querySelector('img').setAttribute('src', penguin.imagePath);
        this.listOfPenguins.querySelector('img').setAttribute('alt', penguin.name);
        this.listOfPenguins.querySelector('p').innerHTML = `<b>Size:</b>${penguin.size}`;
        this.listOfPenguins.querySelector('p').nextElementSibling.innerHTML = `<b>Favorite food: </b>${penguin.favoriteFood}`;

        //use the JS reminder operator (%) to calculate the previous and next index 
        this.previousPenguinButton.setAttribute('data-penguin-index', (penguin.index === 0) ? 4 : (penguin.index - 1) % 5);
        this.nextPenguinButton.setAttribute('data-penguin-index', (penguin.index + 1) % 5);
    }
}

