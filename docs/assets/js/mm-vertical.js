document.addEventListener("DOMContentLoaded", function(event) {
  new MetisMenu('#menu1');
  new MetisMenu('#menu2', {
    toggle: false
  });
  new MetisMenu('#menu3');
});