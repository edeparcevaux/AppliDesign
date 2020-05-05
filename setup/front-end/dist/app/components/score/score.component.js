// TODO Step 6 import "./score.component.html"
(function () {
  // TODO Step 6 remove this closure
  // TODO Step 3.1 create a class

  /* class ScoreComponent constructor */
  class ScoreComponent {
    constructor() {
      var params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }

    init() {
      document.getElementById('name').innerText = this.name;
      document.getElementById('size').innerText = this.size;
      document.getElementById('time').innerText = this.time;
    }

  } // TODO Step 6 implement getTemplate() {}


  function parseUrl() {
    var url = window.location;
    var query = url.href.split('?')[1] || '';
    var delimiter = '&';
    var result = {};
    var parts = query.split(delimiter); // TODO Step 3.3: Use Array.map() & Array.reduce()

    for (var i in parts) {
      var item = parts[i];
      var kv = item.split('=');
      result[kv[0]] = kv[1];
    }

    return result;
  } // put component in global scope, tu be runnable right from the HTML.
  // TODO Step 6 export ScoreComponent


  window.ScoreComponent = ScoreComponent;
})();