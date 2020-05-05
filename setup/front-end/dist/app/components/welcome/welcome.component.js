// TODO Step 6 import "./welcome.component.html"
(function () {
  // TODO Step 6 remove this closure
  class WelcomeComponent {
    init() {
      var form = document.querySelector('form.form-signin');
      form.addEventListener('submit', function (event) {
        // TODO Step 3.2: use arrow function
        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          var name = event.srcElement.querySelector('#nickname').value;
          var size = parseInt(event.srcElement.querySelector('#size').value);

          _startGame(name, size);
        }
      }, false);
      return this;
    }

  } // TODO Step 6 implement getTemplate() {}


  function _startGame(name, size) {
    // TODO Step 3.2: use template literals
    // TODO Step 6: change path to: `game?name=${name}=name&size=${size}`
    window.location = '../game/game.component.html?name=' + name + '&size=' + size;
  } // put component in global scope, tu be runnable right from the HTML.
  // TODO Step 6 export WelcomeComponent


  window.WelcomeComponent = WelcomeComponent;
})();