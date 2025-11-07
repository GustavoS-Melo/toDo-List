//array criado para colocar os input do usuario dentro de uma lista que possa ser modificado
let tarefas = []

function adicionarTarefa(){

	//essa linha serve para pegar dentro do documento o elemento que tiver o id de inputTarefa
  	const inputTarefa = document.getElementById("inputTarefa");
  	//aqui esta usando a palavra reservada 'value' para pegar o valor colocado dentro do input
  	let tarefa = inputTarefa.value.trim(); //trim serve para retirar espaços no final e começo de texto impendindo que o usario escreva varios espaços
	const aviso = document.getElementById("mensagem");

	//condicional criada para verificar se o usuario esta acrescentando inputs validos
	if (tarefa == ""){
		let mensagemErro = "Digite um texto valido";
		aviso.textContent = mensagemErro;
		aviso.style.color = '#a34743'
	} else{
		// nessa linha de codigo esta adicionando uma mensagem quando o usario aperta o botao para adicionar
		let mensagemSucesso = 'tarefa adicionada com sucesso';
		//aqui esta procurando dentro do documento o elemento com o id de 'mensagem' e utilizando o 'textContent' para adicionar um texto dentro do html, e esse texo é a variavel mensagem
		aviso.textContent = mensagemSucesso;
		aviso.style.color = '#28a745'

		//aqui esta utilizando o push para colocar o valor digitado pelo usuario
		tarefas.push(tarefa)
		//aqui esta chamando a função para que apareça na tela
		renderizarTarefa()
	}

  //aqui esta limpando o input
  inputTarefa.value = ""
}

function renderizarTarefa(){
	//aqui esta sendo criado uma variavel para pegar o elemento com o id de listaTarefas dentro do html
	const listaTarefas = document.getElementById("listaTarefas");

	//aqui esta sendo limpado a tela antes de ser adicionado os valores
	listaTarefas.innerHTML = ""
	

	// variavel criada para utilizar na estrutura de repetição for// i de iterador
	//estrutura criada para adicionar os valores colocados pelo usuario
	for(let i = 0; i < tarefas.length; i++){
		//aqui esta usando uma variavel para criar um elemento li dentro do documento
		let novaTarefa = document.createElement("li")
		//aqui esta criando um texto dentro da variavel novaTarefa e atribuindo o valor a variavel tarefa que é o input que o usario deu
		novaTarefa.textContent = tarefas[i]

		let botaoRemover = document.createElement("button")
		botaoRemover.className = "remover"
		botaoRemover.textContent = "EXCLUIR"
		botaoRemover.onclick = () => removerTarefa(i)


		let botaoEditar = document.createElement("button")
		botaoEditar.className = "editar"
		botaoEditar.textContent = "EDITAR"
		botaoEditar.onclick = () => editarTarefa(i)


		novaTarefa.appendChild(botaoEditar)
		novaTarefa.appendChild(botaoRemover)
		//aqui esta usando o metodo appendchild() para adicionar elemento ao final de uma lista
		listaTarefas.appendChild(novaTarefa)
	}
}

function removerTarefa(i){
	tarefas.splice(i, 1)
	renderizarTarefa()
	const aviso = document.getElementById("mensagem");
	aviso.textContent = "Tarefa apagada com sucesso"
	aviso.style.color = '#a34743'
}

function editarTarefa(i){
	let tarefaEditada = prompt("Nova Tarefa:")
	if (tarefaEditada.trim() !== ""){
		tarefas[i] = tarefaEditada
		renderizarTarefa()
		const aviso = document.getElementById("mensagem");
		aviso.textContent = "Tarefa editada com sucesso"
	}
}


function limparLista(){
	tarefas.length = 0
	renderizarTarefa()
		const aviso = document.getElementById("mensagem");
		aviso.textContent = "Lista limpada com sucesso"
}