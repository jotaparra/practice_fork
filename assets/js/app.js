window.onload = function () {
    var btn = document.getElementById('button-change');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtDos = document.getElementById('text');
  
    btn.addEventListener('click', function() {
      txt.innerHTML = '<h2>Git & Github TE AMAMOS</h2>';
    })
  
    btnDos.addEventListener('click', function() {
      //txtDos.innerHTML = '';
      txtDos.classList.add('disappear');
    })
  }