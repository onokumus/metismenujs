document.addEventListener("DOMContentLoaded", function(event) {

  const mmg = new MetisMenu(".mm-github").on("shown.metisMenu", function(event) {
    window.addEventListener("click", function mmClick(e) {
      if (!event.target.contains(e.target)) {
        mmg.hide(event.detail.shownElement);
        window.removeEventListener("click", mmClick);
      }
    });
  });

});
