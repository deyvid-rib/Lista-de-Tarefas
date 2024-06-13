let contador = 0;
let input = document.getElementById('input');
let addButton = document.getElementById('add-button');
let main = document.getElementById('tarefas');

function adicionarTarefa(){
    let tarefa = input.value;
    if ((tarefa !== "") && (tarefa !== null) && (tarefa !== undefined)){
        ++contador

        main.innerHTML += `<div id="${contador}" class="tarefa">
                <div onclick="marcarTarefa(${contador})" class="tarefa-icone">
                    <img src="ícones/circulo.png">
                </div>
                <div onclick="marcarTarefa(${contador})" class="tarefa-texto">
                    <p>${tarefa}</p>
                </div>
                <button onclick="removerTarefa(${contador})" class="tarefa-remove-button">
                    <img src="ícones/remover-botao-redondo.png" width="20px" style="margin-right: 2%;">
                    Remover
                </button>
            </div>`
    }
    input.value = "";
    input.focus();
}

function removerTarefa(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    let tarefa = document.getElementById(id);
    let icone = tarefa.querySelector('.tarefa-icone img')
    tarefa.classList.toggle('tarefa-marcada')
    if (tarefa.classList.contains('tarefa-marcada')){
        tarefa.parentNode.appendChild(tarefa);
        icone.src = "ícones/verificar.png";
    }
    else{
        icone.src = "ícones/circulo.png";
    }

}

input.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        addButton.click();
    }
})