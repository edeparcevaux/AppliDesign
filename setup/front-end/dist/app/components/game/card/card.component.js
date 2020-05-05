// TODO Step 6 import "./card.component.html"

  // TODO Step 6 remove this closure
  // TODO Step 3.1 create a class

  /* class CardComponent constructor */
  class CardComponent {
    constructor(id) {
      // is this card flipped ?
      this._flipped = false; // has the matching card has been discovered already ?

      this.matched = false;
      this._id = id;
      this._elt = document.getElementById('card-template').content.cloneNode(true).firstElementChild;
      this._imageElt = this._elt.querySelector('.card-wrapper'); // TODO Step 1: Change images location to ./card/assets/***.png
      // TODO Step 3.2: use template literals

      this._imageElt.querySelector('img.front-face').src = './card/assets/card-' + this._id + '.png';
      this._imageElt.querySelector('img.back-face').src = 'src/app/components/game/card/assets/back.png';
    }

    getElement() {
      return this._elt;
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
      this._flipped = flipped;
    }

  } // TODO Step 6 implement getTemplate() {}

  /* CardComponent.get flipped() */


  Object.defineProperties(CardComponent.prototype, {
    flipped: {
      get: function () {
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
        debugger;
        throw new Error(atob('VG9vIGJhZCEgV2l0aG91dCBjbG9zdXJlLCBJIGNhbiBjb2xsaWRlIGJ5IG1pc3Rha2VzICB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdGhhdCBoYXZlIGJlZW4gc2V0IGluIGFub3RoZXIgZmlsZQ'));
      }
    }
  }); // put component in global scope, tu be runnable right from the HTML.
  // TODO Step 6 export CardComponent

