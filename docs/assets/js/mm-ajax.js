document.addEventListener("DOMContentLoaded", function(event) {
  const ajaxButton = document.querySelector("#ajaxButton");
  const menu = document.querySelector("#menu");
  const mm = new MetisMenu(menu);

  ajaxButton.addEventListener("click", ev => {
    fetch("demo-ajax.html")
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then(data => data.text())
      .then(data => {
        mm.dispose();
        menu.innerHTML += data;
      })
      .then(() => {
        mm.update();
      })
      .catch(console.error);
  });
});
