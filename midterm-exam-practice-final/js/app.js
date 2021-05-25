import {penguinData}        from './penguinData.js';
import {PenguinModel}       from './PenguinModel.js';
import {PenguinView}        from './PenguinView.js';
import {PenguinController}  from './PenguinController.js';

window.onload = function(){
    let model = new PenguinModel(penguinData);
    let view = new PenguinView();
    new PenguinController(model, view);
};