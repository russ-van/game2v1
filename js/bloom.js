let cadastro = [];
var ordem = 1;
var cadastroOrdem = [];

var linhaTabela = document.querySelector("#linhaTabela");

function cadastrarBloom() {

    let nome = document.querySelector("#nome").value;

    if (nome !== "") {

        localStorage.setItem("nome", nome)
        cadastro.push(localStorage.getItem("nome"));
        localStorage.setItem("cadastro", cadastro)

        document.querySelector("#nome").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    linhaTabela.innerHTML = "";
    
    for (let i = 0; i < cadastro.length; i++) {
        ordem = i + 1;
        linhaTabela.innerHTML += `<tr>
                <td>${ordem}</td>
                <td>${cadastro[i]}</td>
                <td><button onclick="editar(${ordem})">Editar ✏️</button> <button onclick="apagar(${ordem})" >Apagar 🗑️</button></td>
                </tr>`
    }

    localStorage.setItem("ordem", ordem)
    cadastroOrdem.push(localStorage.getItem("ordem"))
    localStorage.setItem("cadastroOrdem", cadastroOrdem)
}

function editar(nOrdem) {

    let nome = prompt("Digite o novo nome:")
    let ordem = Number(nOrdem)
    let editarOrdem = ordem - 1

    if (nome !== "") {
        linhaTabela.innerHTML = "";

        localStorage.setItem("nome", nome)
        cadastro.splice(editarOrdem, 1, nome)
        localStorage.setItem("cadastro", cadastro)


        for (let i = 0; i < cadastro.length; i++) {
            ordem = i + 1;
            linhaTabela.innerHTML += `<tr>
                    <td>${ordem}</td>
                    <td>${cadastro[ordem - 1]}</td>
                    <td><button onclick="editar(${ordem})">Editar ✏️</button> <button onclick="apagar(${ordem})" >Apagar 🗑️</button></td>
                    </tr>`
        }
        document.querySelector("#nome").value = "";
    } else {
        alert(`Não pode estar em branco!`)
    }
}

function apagar(nOrdem) {
    linhaTabela.innerHTML = "";

    let ordem = Number(nOrdem)
    let editarOrdem = ordem - 1

    localStorage.removeItem("nome")
    cadastro.splice(editarOrdem, 1, "Removido ❌")
    localStorage.setItem("cadastro", cadastro)

    for (let i = 0; i < cadastro.length; i++) {
        ordem = i + 1;
        linhaTabela.innerHTML += `<tr>
                    <td>${ordem}</td>
                    <td>${cadastro[ordem - 1]}</td>
                    <td><button onclick="editar(${ordem})">Editar ✏️</button> <button onclick="apagar(${ordem})" >Apagar 🗑️</button></td>
                    </tr>`
    }
    document.querySelector("#nome").value = "";

}

