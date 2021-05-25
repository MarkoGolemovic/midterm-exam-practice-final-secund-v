export class PenguinController {
    constructor(model, view) {
        this.view = view;
        this.model = model;

        this.view.storeButton.onclick = this.storePenguin.bind(this);
        this.view.previousPenguinButton.onclick = this.loadPenguin.bind(this);
        this.view.nextPenguinButton.onclick = this.loadPenguin.bind(this);
    }

    /**
     * On click event handler for both previousPenguinButton & nextPenguinButton
     * @param {type} e event
     * @returns {undefined}
     */
    loadPenguin(e) {
        let index = parseInt(e.currentTarget.getAttribute('data-penguin-index')); //OR let index = parseInt(e.currentTarget.dataset.penguinIndex);
        let penguin = this.model.getPenguin(index);
        this.view.render(penguin);
    }

    storePenguin() {
        let index = parseInt((this.view.previousPenguinButton.dataset.penguinIndex + 1) % 4);
        window.localStorage.setItem('penguin', JSON.stringify(this.model.getPenguin(index)));
    }
}


