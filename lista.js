function DeletarItem(){ //Procedimento para o Funcionamento do botão Deletar
    console.log(this.parentElement)
    this.parentElement.remove()
}


function EditarItem(){ //Não sei oque fazer
    criar_textbox.readOnly = false
}
function SalvarItem(){ //Procedimento para o funcionamento do botão Salvar
    const novo_valor_item_lista = this.parentElement.firstChild //A primeira criança é o que foi digitado lá na caixa de texto
    const item_lista = this.parentElement // Vai retornar o elemento pai 
    item_lista.innerHTML = novo_valor_item_lista.value //vai remover os elementos e adionar a informação nova inserida no novo_item_lista
    item_lista.appendChild(CriarBotaoDeletar()) // vai anexar o botão de deletar
    item_lista.appendChild(CriarBotaoEdit()) // vai anexar o botão de editar
}
function CriarBotaoSalvar(){ //Criando o botão de salvar
    const botao_salvar = document.createElement('button')
    botao_salvar.classList.add("btn", "btn-success")
    botao_salvar.type = "button"
    botao_salvar.innerHTML = "Salvar"
    botao_salvar.addEventListener("click", SalvarItem)
    return botao_salvar
}

function CriarBotaoEditar(){ //Criando o botão de Editar
    const botao_editar = document.createElement('button')
    botao_editar.classList.add("btn", "btn-primary")
    botao_editar.type = "button"
    botao_editar.innerHTML = "  Editar  "
    botao_editar.addEventListener("click", EditarItem )
    
    return botao_editar
}

function CriarBotaoDeletar(){ //Criando o botão Deletar
    const botao_deletar =  document.createElement('button')
    botao_deletar.classList.add("btn", "btn-danger")
    botao_deletar.innerHTML = "Deletar"
    botao_deletar.type = "button"
    botao_deletar.addEventListener("click", DeletarItem)

    return botao_deletar
}

function Submit(){ 
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')
    criar_textbox = document.createElement('input')
    criar_textbox.type = 'text'
    criar_textbox.readOnly = true

    novo_item_lista = document.createElement("li")
    lista.appendChild(novo_item_lista)
    criar_textbox.value = valor.value

    novo_item_lista.appendChild(criar_textbox)
    novo_item_lista.appendChild(CriarBotaoEditar())
    novo_item_lista.appendChild(CriarBotaoSalvar())

    novo_item_lista.appendChild(CriarBotaoDeletar())



    document.getElementById("item").value = ""
}
// Eu não estava conseguindo fazer de jeito nenhum professora , então eu pedi ajuda para o Leonardo.
// Ele me ajudou a fazer o código. Depois de muito tempo me explicando , consegui finalmente entender.











// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
