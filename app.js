let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let regex = /^[a-zA-Z]+$/;

    if (amigo.value.trim() === "") {
        alert("Por favor, insira um nome.");
        amigo.focus();
        return;
    }
    if (!regex.test(amigo.value)) {
        alert("Por favor, insira um nome válido (sem caracteres especiais).");
        amigo.focus();
        return;
    }
    if (amigos.includes(amigo.value)) { // Verificar se o amigo já está na lista
        alert("Nome já existe!");
        return;
    }
    if (amigo.value.length < 3) {
        alert("O nome deve ter pelo menos três letras.");
        amigo.focus();
        return;
    }

    amigos.push(amigo.value); // Adiciona o amigo ao array
    alert("Amigo adicionado com sucesso!");
    atualizarListaAmigos(); // Atualiza a lista de amigos exibida

    amigo.value = ""; // Limpa o campo do amigo
    amigo.focus(); // Adiciona o foco de volta ao campo de entrada
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // Percorrer o array amigos e adicionar cada nome como um elemento <li>
    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Mostrar o resultado
    resultado.innerHTML = "Amigo sorteado: " + amigos[indiceAleatorio];
}

function reiniciar() {
    amigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarListaAmigos();
}

function focusInput() {
    document.getElementById("amigo").focus();
}

// Garantir que o cursor está na caixa de texto ao carregar a página
window.onload = focusInput;
