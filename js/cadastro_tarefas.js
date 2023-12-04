getItem = (item) => JSON.parse(localStorage.getItem(item))
setItem = (item, value) => localStorage.setItem(item, JSON.stringify(value))

document.getElementById('botaoCriarTarefa').addEventListener("click", (e) => {
    e.preventDefault()
    const usuarios = getItem('usuarios')
    const usuarioLogado = getItem('usuarioLogado')
    const tarefa = {
        tarefa: document.getElementById('inputTarefa').value,
        dataInicio: document.getElementById('inputDataInicio').value,
        horaInicio: document.getElementById('inputHoraInicio').value,
        dataTermino: document.getElementById('inputDataTermino').value,
        horaTermino: document.getElementById('inputHoraTermino').value,
        descricao: document.getElementById('descricao').value,
        realizado: false
    }    
    usuarioLogado.tarefas.push(tarefa)
    for(i = 0; i < usuarios.length; i++){
        if(usuarios[i].email === usuarioLogado.email){
            usuarios[i].tarefas.push(tarefa)
        }
    }
    setItem('usuarios', usuarios)
    setItem('usuarioLogado', usuarioLogado)
    alert("Cadastrado com sucesso")
    window.location.reload()
})