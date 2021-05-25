export class PenguinModel {
    constructor(penguinData) {
        this._penguins = [];
        let index = 0;
        for (let penguin of penguinData) {
            penguin.index = index;
            this._penguins.push(penguin);
            index++;
        }
    }

    getPenguin(index) {
        for (let penguin of this._penguins)
            if (penguin.index === index)
                return penguin;
    }
}

