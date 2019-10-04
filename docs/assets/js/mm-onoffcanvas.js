document.addEventListener("DOMContentLoaded", function (event) {

  const leftAside = document.getElementById("left-aside");
  const leftAsideCanvas = new OnoffCanvas(leftAside);

  const leftMenu = document.getElementById("menu1");
  const leftMetisMenu = new MetisMenu(leftMenu);
});
