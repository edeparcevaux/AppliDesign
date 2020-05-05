import {Component} from '../../../utils/component';
import template from './card.component.html';
import './card.component.scss';




   export class CardComponent extends Component {
        constructor(id)
        {
        super('card');
        // is this card flipped ?
        this._flipped = false;

        // has the matching card has been discovered already ?
        this.matched = false;

        this._id = id;

        this._elt = super.getElement();
        this._imageElt = this._elt.querySelector('.card-wrapper');
        
        this._imageElt.querySelector('img.front-face').src = `src/app/components/game/card/assets/card-${this._id}.png`;
        this._imageElt.querySelector('img.back-face').src = 'src/app/components/game/card/assets/back.png';
    }
     getElement() {
        return this._elt;
    }
    getTemplate() {
        return template;
    }


     flip() {
        this._imageElt.classList.toggle('flip');
        this._flipped = !this._flipped;
    }

     equals(card) {
        return card._id === this._id;
    }
    get flipped() {
        return this._flipped;
    }
    
    set flipped(flipped) {
        this._flipped=flipped;
    }

    }
   





    /* CardComponent.get flipped() */
    Object.defineProperties(CardComponent.prototype, {
        flipped: {
            get: function() {
                return this._flipped;
            }
        }
    });

    var environment = {
        api: {}
    };
    Object.defineProperties(environment.api, {
        host: {
            get: function () {
                debugger
                throw new Error(atob('VG9vIGJhZCEgV2l0aG91dCBjbG9zdXJlLCBJIGNhbiBjb2xsaWRlIGJ5IG1pc3Rha2VzICB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdGhhdCBoYXZlIGJlZW4gc2V0IGluIGFub3RoZXIgZmlsZQ'));
            }
        }
    });


    // put component in global scope, tu be runnable right from the HTML.
    // TODO Step 6 export CardComponent
    window.CardComponent = CardComponent;

