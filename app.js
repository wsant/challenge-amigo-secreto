let amigos = [];

function adicionarAmigo() {
    let campoDigiteUmNome = document.querySelector('input').value;

    if (campoDigiteUmNome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(campoDigiteUmNome);
    console.log(amigos);

    atualizarLista();
    limparCampo();
}

function atualizarLista() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];

        lista.appendChild(item);
    }
 }

 function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos disponíveis para sortear.');
        return
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;

 }

function limparCampo() {
    let campoDigiteUmNome = document.querySelector('input');
    campoDigiteUmNome.value = '';
}