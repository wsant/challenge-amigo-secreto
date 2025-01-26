let amigos = [];

function adicionarAmigo() {
    let campoDigiteUmNome = document.querySelector('input').value;

    if (campoDigiteUmNome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(campoDigiteUmNome);
    console.log(amigos);

    limparCampo()
}


function limparCampo() {
    let campoDigiteUmNome = document.querySelector('input');
    campoDigiteUmNome.value = ''
}