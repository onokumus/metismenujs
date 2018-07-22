document.addEventListener("DOMContentLoaded", function(event) {

  new MetisMenu('#menu').on('show.metisMenu', function(event) {
    
    new Noty({
      text: event.detail.showElement.parentNode.querySelector('a').innerHTML + ' opening ...',
      layout: 'topRight',
      type: 'information',
      theme: 'relax',

      timeout: 1000
    }).show();
  }).on('shown.metisMenu', function(event) {
    new Noty({
      text: event.detail.shownElement.parentNode.querySelector('a').innerHTML + ' opened',
      layout: 'topRight',
      type: 'success',
      theme: 'relax',
      timeout: 3000
    }).show();
  }).on('hide.metisMenu', function(event) {
    new Noty({
      text: event.detail.hideElement.parentNode.querySelector('a').innerHTML + ' collapsing ...',
      layout: 'topRight',
      type: 'warning',
      theme: 'relax',
      timeout: 1000
    }).show();
  }).on('hidden.metisMenu', function(event) {
    new Noty({
      text: event.detail.hiddenElement.parentNode.querySelector('a').innerHTML + ' collapsed',
      layout: 'topRight',
      type: 'error',
      theme: 'relax',
      timeout: 3000
    }).show();
    
  });

});
