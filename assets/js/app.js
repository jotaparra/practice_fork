window.onload = function () {
//crear variable para boton - Estas son variables globales
    var btn = document.getElementById('button-change');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtDos = document.getElementById('text');

// ejecutar sobre variable con addEventListener
    btn.addEventListener('click', function(){
        txt.innerHTML = '<h2>Git & Github TE AMAMOS</h2>';
    })

    btn.addEventListener('click', function(){
        //text.innerHTML = ''
        txtDos.classList.add('disappear');

    })
}