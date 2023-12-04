const getItem = (item) => JSON.parse(localStorage.getItem(item))
const setItem = (item, value) => localStorage.setItem(item, JSON.stringify(value))

let usuarios = getItem("usuarios")
if (usuarios === null){
    usuarios = [];
    setItem("usuarios", usuarios)
}

let maxId = usuarios.reduce((max, user) => Math.max(max, user.id), 0);

document.forms.login.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
})

document.forms.criacao.addEventListener("submit", (e) => {
    e.preventDefault()
    const usuarios = getItem("usuarios")
    const usuario = {
        nome: e.target.nome.value, 
        email: e.target.email.value,
        senha: e.target.senha.value,
        id: ++maxId, 
        tarefas: []
    }
    usuarios.push(usuario)
    setItem("usuarios", usuarios)
    alert("Cadastrado com sucesso")
    e.target.reset()
})
