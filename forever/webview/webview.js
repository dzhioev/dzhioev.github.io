addEventListener('load', function() {
  addEventListener('message', onMessage);

  function log(m) {
    console.log(m);
    document.querySelector('textarea').value += m + '\n';
  }

  function onMessage(m) {
    log('onMessage: received message "' + m.data + '"');
    log('onMessage: sending "pong" back');
    m.source.postMessage('pong', '*');
  }
});
