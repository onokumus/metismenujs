function removeElement(node) {
  node.parentNode.removeChild(node);
}

document.addEventListener("DOMContentLoaded", function(event) {
  const stopMm = document.querySelector("#stopMm");
  const startMm = document.querySelector("#startMm");
  const deleteElem = document.querySelector("#deleteElem");
  const mm = new MetisMenu("#menu");
  const mm1 = new MetisMenu("#menu1");

  stopMm.addEventListener("click", function(event) {
    mm.dispose();
    new Noty({
      text: "metisMenu stopped",
      layout: "topRight",
      type: "error",
      theme: "relax",
      progressBar: true,
      timeout: 2000
    }).show();
  });

  startMm.addEventListener("click", function(event) {
    mm.update();
    new Noty({
      text: "metisMenu restarted",
      layout: "topRight",
      type: "success",
      theme: "relax",
      progressBar: true,
      timeout: 2000
    }).show();
  });

  deleteElem.addEventListener("click", function(event) {
    mm1.dispose();
    removeElement(document.querySelector('#menu1 #removable'));
    new Noty({
      text: 'Menu 1 removed',
      layout: 'topRight',
      type: 'information',
      theme: 'relax',
      progressBar: true,
      timeout: 2000
    }).show();

    mm1.update();

    deleteElem.classList.remove("btn-danger");
    deleteElem.classList.add("btn-success");
    deleteElem.innerHTML = "Menu 1 removed";
    deleteElem.setAttribute("disabled", "disabled");
  });
});
