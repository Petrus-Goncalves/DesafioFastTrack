document.addEventListener('DOMContentLoaded', function () {
    const index = getItem('tarefaEditando');
    getItem('usuarioLogado').tarefas.forEach(function (t, index) {

        let tarefa = t.tarefa
        let dataInicio = t.dataInicio
        let horaInicio = t.horaInicio

        let dataTermino = t.dataTermino
        let horaTermino = t.horaTermino

        // Splitando e separando as datas e horas e criando um formato new Date()
        let n_dataInicio = dataInicio.split("/");
        let n_horaInicio = horaInicio.split(":")
        let novoInicio = new Date(20 + n_dataInicio[2], n_dataInicio[1] - 1, n_dataInicio[0], n_horaInicio[0], n_horaInicio[1])

        let n_dataTermino = dataTermino.split("/");
        let n_horaTermino = horaTermino.split(":")
        let novoTermino = new Date(20 + n_dataTermino[2], n_dataTermino[1] - 1, n_dataTermino[0], n_horaTermino[0], n_horaTermino[1])

        let hora_data_local = new Date()

        // Realizando a conferência dos status da tarefa
        let categoria = ''
        let nome_status = ' '


        if (hora_data_local < novoInicio) {
            categoria = 'Pendente'
            nome_status = "text-danger-emphasis"
        }
        else if (t.realizado) {
            categoria = 'Realizada'
            nome_status = 'text-success'

        } else if (hora_data_local > novoInicio && hora_data_local < novoTermino) {
            categoria = 'Em andamento'
            nome_status = 'text-primary'

        } else if (hora_data_local > novoTermino) {
            categoria = 'Em atraso'
            nome_status = 'text-danger'
        }

        // Criando uma nova linha na tabela e Inserindo os valores na nova linha
        const tableBody = document.querySelector('#tabelaTarefas tbody');
        const novaLinha = document.createElement("tr")

        const botaoId = 'botaoAlterar' + index;
        novaLinha.innerHTML = `
            <td>${tarefa}</td>
            <td>${dataInicio} às ${horaInicio}</td>
            <td>${dataTermino} às ${horaTermino}</td>
            <td class="${nome_status}" id="${index}">${categoria}</td>
            <td><button id="${botaoId}" type="button" class="btn btn-warning">Alterar</button></td>
        `;
        if (tableBody) {
            tableBody.appendChild(novaLinha);

            document.getElementById(botaoId).addEventListener('click', function () {
                setItem('tarefaEditando', index);
                window.location.href = 'pagina3_alteracoes.html';
            });
        }
    });
});