var a = window.document.getElementById('paragrafo')
a.addEventListener('mouseover', paragrafo)

function paragrafo() {
    a.innerText = 'Usei a tag <p>'
}

var b = window.document.getElementById('titulos')
a.addEventListener('mouseover', titulos)

function titulos() {
    b.innerText = 'Usei a tag <h>'
}

var c = window.document.getElementById('imagens')
a.addEventListener('mouseover', imagens)

function imagens() {
    c.innerText = 'Usei a tag <img>'
}

var d = window.document.getElementById('abreviacoes')
a.addEventListener('mouseover', abreviacoes)

function abreviacoes() {
    d.innerText = 'Usei a tag <?>'
}